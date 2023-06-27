import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  loading: boolean;
  token: string;
  email: string;
}

const initialState: AuthState = {
  loading: false,
  token: "", //TODO: persists token
  email: "",
};

const authSlice = createSlice({ name: "auth", initialState, reducers: {} });

export default authSlice.reducer;
