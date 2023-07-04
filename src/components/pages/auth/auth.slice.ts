import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { appApi } from "../../../utils/appApi";

interface AuthState {
  loading: boolean;
  token: string;
  email: string;
  role: string;
}
//operator guard &&

// const authStr = localStorage.getItem('auth')
// const init = JSON.parse(authStr ? authStr : '{}');
//operator default ||

const init = JSON.parse(localStorage.getItem("auth") || "{}");

const initialState: AuthState = {
  loading: false,
  token: "",
  email: "",
  role: "",
  ...init,
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

export const register = createAsyncThunk(
  "auth/register",
  async (loginData: LoginData) => {
    const resp = await appApi.post("auth/register", loginData);
    return { token: resp.data.token, email: loginData.email };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.email = "";
      state.token = "";
      state.role = "";
      localStorage.removeItem("auth");
    },
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
      localStorage.setItem("auth", JSON.stringify(state));
    });

    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
      state.token = "";
      state.email = "";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.role = "admin";
      localStorage.setItem("auth", JSON.stringify(state));
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
