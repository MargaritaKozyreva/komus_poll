import { QuestionType } from "@src/shared/api/types";
export type QuestionVariantsType =
  | "choice"
  | "select"
  | "combo"
  | "string"
  | "text"
  | "number"
  | "date"
  | "link_to_database_object"
  | "file"
  | "bool";

export enum QuestionVariants {
  CHOISE = "choice",
  SELECT = "select",
  COMBO = "combo",
  STRING = "string",
  TEXT = "text",
  NUMBER = "number",
  DATE = "date",
  LINK = "link_to_database_object",
  FILE = "file",
  BOOL = "bool",
  ORDER = "order"
}

export type QuestionResponse<T> = {
  type: QuestionVariants;
  id: QuestionType["question_id"];
  isRequired: boolean;
  value: T;
};