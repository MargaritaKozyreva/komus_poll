import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserContext } from "@shared/api/dataContext/fake";

export const getCurrentUser = createAsyncThunk(
  "userSlice/getCurrentUser",
  async () => {
    const data = await UserContext.getCurrentUser();
    return data;
  }
);
export const getUserById = createAsyncThunk(
  "userSlice/getUserById",
  async (userId: string | null) => {
    const data = await UserContext.getUserById({ userId });
    return data;
  }
);
