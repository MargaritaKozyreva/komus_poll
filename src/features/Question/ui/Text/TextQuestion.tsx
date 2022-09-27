import { QuestionType } from "@src/shared/api/types";
import React, { useState } from "react";
import { QuestionResponse, QuestionVariants } from "../types";
import { Input } from "antd";
const { TextArea } = Input;

const TextQuestion: React.FC<QuestionType> = props => {
  const [response, setQuestionResponse] = useState<QuestionResponse<String>>({
    type: QuestionVariants.TEXT,
    id: props.question_id,
    value: "",
  });

  const onChange = e => {
    setQuestionResponse({
      ...response,
      value: e.target.value,
    });
  };
  console.log("textarea checked", response);

  return (
    <div>
      <TextArea rows={4} onChange={onChange}>{response.value}</TextArea>
    </div>
  );
};

export { TextQuestion };
