import { QuestionType } from "@src/shared/api/types";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { DatePicker } from "antd";
import { QuestionResponse, QuestionVariants } from "../types";

const DateQuestion: React.FC<QuestionType> = props => {
  const [response, setQuestionResponse] = useState<QuestionResponse<String>>({
    type: QuestionVariants.DATE,
    id: props.question_id,
    value: "",
  });

  const dateFormat = 'DD.MM.YYYY';

  const onChange = (date, dateString) => {
    setQuestionResponse({
      ...response,
      value: dateString,
    });
  };
  console.log("date checked", response);

  return (
    <div>
      <DatePicker onChange={onChange} format={dateFormat} />
    </div>
  );
};

export { DateQuestion };
