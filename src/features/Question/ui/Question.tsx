import { QuestionType } from "@src/shared/api/types";
import React from "react";
import {
  BoolQuestion,
  ChoiseQuestion,
  ComboQuestion,
  DateQuestion,
  FileQuestion,
  LinkQuestion,
  NumberQuestion,
  SelectQuestion,
  StringQuestion,
  TextQuestion,
} from ".";
import OrderQuestion from "./Order/OrderQuestion";
import { QuestionVariants } from "./types";

const Question: React.FC<QuestionType> = props => {
  const { question_type } = props;
  const QuestionComponent: React.FC = (): JSX.Element => {
    switch (question_type) {
      case QuestionVariants.BOOL:
        return <BoolQuestion {...props} />;
      case QuestionVariants.CHOISE:
        return <ChoiseQuestion {...props} />;
      case QuestionVariants.COMBO:
        return <ComboQuestion {...props} />;
      case QuestionVariants.DATE:
        return <DateQuestion {...props} />;
      case QuestionVariants.FILE:
        return <FileQuestion {...props} />;
      case QuestionVariants.LINK:
        return <LinkQuestion {...props} />;
      case QuestionVariants.NUMBER:
        return <NumberQuestion {...props} />;
      case QuestionVariants.SELECT:
        return <SelectQuestion {...props} />;
      case QuestionVariants.STRING:
        return <StringQuestion {...props} />;
      case QuestionVariants.TEXT:
        return <TextQuestion {...props} />;
      case QuestionVariants.ORDER:
        return <OrderQuestion {...props} />;
      default:
        const _: never = question_type;
        throw new Error("Нет такого типа вопроса");
    }
  };

  return <QuestionComponent />;
};

export default Question;
