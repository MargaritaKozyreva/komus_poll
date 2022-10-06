import { createAsyncThunk } from "@reduxjs/toolkit";
import { PollContext, RemoteCatalogContext } from '@src/shared/api/dataContext/fake';

export const getPollData = createAsyncThunk('PollSlices/getPollData', async (payload: {pollId: string}) => {
    const data = await PollContext.getPoll({pollId: payload.pollId})
    return data
})