import { PollContext } from "@api/dataContext/fake";

export const getPollById = async (pollId: string) => {
  const data = await PollContext.getPoll({pollId})
  return data;
};