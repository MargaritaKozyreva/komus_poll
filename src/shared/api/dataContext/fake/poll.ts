import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { PollDTO } from '../../dto';
import { pollData } from "./items/poll";

export class PollData {
  getPoll(payload: { pollId: string }): ResponseResult<PollDTO> {
    const data = httpServiceMock<PollDTO>(pollData);
    return data;
  }
}
