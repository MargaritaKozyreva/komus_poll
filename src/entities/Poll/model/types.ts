import {  SerializedError } from "@reduxjs/toolkit";
import { PollDTO } from '@src/shared/api/dto';

export type PollRequestType = {
  entity: PollDTO | null
  isLoading: boolean;
  error: string | SerializedError | undefined;
};
