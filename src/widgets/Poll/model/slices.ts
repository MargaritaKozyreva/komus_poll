import { createSlice } from "@reduxjs/toolkit";
import { QuestionResponse } from '@src/features/Question/ui/types';
import { getPollData } from './actions';
import { PollState } from './types';

const initialState: PollState = {
    entity: null,
    questionInfo: [],
    isLoading: false,
    error: undefined,
};

const pollSlices = createSlice({
    name: "PollSlices",
    initialState,
    reducers: {
        getQuestionInfo: (state: PollState, action: { payload: QuestionResponse<unknown> }) => {
            state.questionInfo = [...state.questionInfo, action.payload]
        }
    },
    extraReducers: builder => {
        builder.addCase(getPollData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getPollData.fulfilled, (state, action) => {
            state.entity = action.payload.data;
            state.isLoading = false;
        });
        builder.addCase(getPollData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
})

export const pollActions = pollSlices.actions;
export const pollReducers = pollSlices.reducer;
