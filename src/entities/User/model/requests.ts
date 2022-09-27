import { UserContext } from "@shared/api/dataContext/fake";

export const getUserRequestStateByUserId = async (userId: string) => {
  const data = await UserContext.getUserRequestStatus({ userId });
  return data;
};
