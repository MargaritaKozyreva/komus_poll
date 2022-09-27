import { QuestionResponse } from "@src/features/Question/ui/types";
import { QuestionType } from "@src/shared/api/types";

export type DraggableListPropsType = {
  items: QuestionType["entries"];
  getItemList: React.Dispatch<
    React.SetStateAction<Array<{ id: string; value: string }>>
  >;
};

export type DraggableListType = {
  draggedItem: QuestionType["entries"][0];
};
