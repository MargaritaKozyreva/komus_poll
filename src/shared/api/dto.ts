
import {
  ResponceQuestionType,
  UserType,
  WtRemoteCatalogType,
  RemoteFieldsType,
  RemoteColumnsType,
} from "./types";

export interface PollDTO {
  session_id: string | null;
  title: string;
  questions: ResponceQuestionType[];
}
export interface UserDTO {
  user: UserType;
}

export type RemoteCatalogDTO = WtRemoteCatalogType<
  RemoteFieldsType,
  RemoteColumnsType
>;

