
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RemoteCatalogContext } from '@src/shared/api/dataContext/fake';

export const getRemoteCatalogData = createAsyncThunk(
    "RemoteCatalogSlice/getRemoteCatalogData",
    async (payload: { catalogName: string, searchStr: string }) => {
        const data = await RemoteCatalogContext.getRemoteCatalogData(payload)
        return data;
    }
);