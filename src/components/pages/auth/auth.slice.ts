import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { appApi } from "../../../utils/appApi";

interface AuthState {
  loading: boolean;
  token: string;
  email: string;
  role: string;
}

const initialState: AuthState = {
  loading: false,
  token: "", //TODO: persists token
  email: "",
  role: "",
};

interface LoginData {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (loginData: LoginData) => {
    const resp = await appApi.post("auth/login", loginData);
    return { token: resp.data.token, email: loginData.email };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.token = "";
      state.email = "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.role = "admin";
    });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
