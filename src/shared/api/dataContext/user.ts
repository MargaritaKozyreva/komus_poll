import { UserType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class UserData {
  getCurrentUser(): ResponseResult<UserType> {
    const data = httpService<UserType>(
      "GET",
      "get_current_user",
    );
    return data;
  }
  getUserById(payload: { userId: string }): ResponseResult<UserType> {
    const data = httpService<UserType>(
      "GET",
      "get_user_by_id",
      `user_id=${payload.userId}`
    );
    return data;
  }

  getUserRequestStatus(payload: { userId: string }): ResponseResult<{status: boolean}> {
    const data = httpService<{status: boolean}>(
      "GET",
      "get_user_request_status",
      `user_id=${payload.userId}`
    );
    return data;
  }
}

