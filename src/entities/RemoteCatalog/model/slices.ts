import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { RemoteCatalogDTO } from '@src/shared/api/dto';
import { getRemoteCatalogData } from './actions';

export type RemoteCatalogState = {
  entity: RemoteCatalogDTO | null;
  isLoading: boolean;
  error: string | SerializedError | undefined;
};

const initialState: RemoteCatalogState = {
  entity: null,
  isLoading: false,
  error: undefined,
};

const RemoteCatalogSlices = createSlice({
  name: "RemoteCatalogSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRemoteCatalogData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getRemoteCatalogData.fulfilled, (state, action) => {
      state.entity = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getRemoteCatalogData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const remoteCatalogActions = RemoteCatalogSlices.actions;
export const remoteCatalogReducers = RemoteCatalogSlices.reducer;
