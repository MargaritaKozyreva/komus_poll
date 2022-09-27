import { QuestionVariants } from "@src/features/Question/ui/types";

export type UserType = {
  id: string;
  fullname: string;
  positionName: string;
  photo?: string;
};

export type ResponceQuestionType = {
  question_id: string;
  question_title: string;
  question_type: QuestionVariants;
  is_multiple: string;
  entries?: string;
  image_id?: string;
  required?: string;
  catalog?: string;
};

export type QuestionType = {
  question_id: number;
  question_title: string;
  question_type: QuestionVariants;
  is_multiple: boolean;
  entries?: Array<{ id: string; value: any }>;
  image_id?: string;
  required?: boolean;
  catalog?: string;
};

export type WtRemoteCatalogType<T, U> = {
  success: boolean;
  messageText: string;
  total: number;
  data: Record<string, unknown>;
  sorters: {
    property: string;
    direction: string;
  }[];
  results: Array<T>;
  columns: Array<U>;
};

export type RemoteFieldsType = {
  id: string;
  key?: string;
  icon: string;
  disp: string;
  d0?: string | number;
  d1?: string | number;
  d2?: string | number;
  d3?: string | number;
  d4?: string | number;
  d5?: string | number;
  d6?: string | number;
  d7?: string | number;
  d8?: string | number;
  d9?: string | number;
  d10?: string | number;
  d11?: string | number;
  d12?: string | number;
  d13?: string | number;
  d14?: string | number;
  d15?: string | number;
  d16?: string | number;
  d17?: string | number;
  d18?: string | number;
  d19?: string | number;
  d20?: string | number;
  col?: string | number;
};
export type RemoteColumnsType = {
  data: string;
  title?: string;
  type?: string;
  editable: boolean;
  colorsource?: string;
  sortable: boolean;
  multiline?: boolean;
  width?: string | number;
  minwidth?: string;
  hidden?: boolean;
};
