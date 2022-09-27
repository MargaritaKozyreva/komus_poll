import { UserType } from "@api/types";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { userData, userStatus } from './items/user';

export class UserData {
  getCurrentUser(): ResponseResult<UserType> {
    const data = httpServiceMock<UserType>(userData);
    return data;
  }
  getUserById(payload: { userId: string }): ResponseResult<UserType> {
    const data = httpServiceMock<UserType>(userData);
    return data;
  }
  getUserRequestStatus(payload: { userId: string }): ResponseResult<{status: boolean}> {
    const data = httpServiceMock<{status: boolean}>(userStatus);
    return data;
  }
}
