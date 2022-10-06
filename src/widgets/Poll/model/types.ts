import { SerializedError } from '@reduxjs/toolkit';
import { QuestionResponse } from '@src/features/Question/ui/types';
import { PollDTO } from '@src/shared/api/dto';

export type PollState = {
    entity: PollDTO | null,
    questionInfo: QuestionResponse<any>[] | [],
    isLoading: boolean,
    error: string | SerializedError | undefined;
};