import { QuestionType } from "@src/shared/api/types";
import React, { useState } from "react";
import { QuestionResponse, QuestionVariants } from "../types";
import { Input } from "antd";

const StringQuestion: React.FC<QuestionType> = props => {
  const [response, setQuestionResponse] = useState<QuestionResponse<string>>({
    type: QuestionVariants.STRING,
    id: props.question_id,
    value: "",
  });

  const onChange = e => {
    setQuestionResponse({
      ...response,
      value: e.target.value,
    });
  };
  console.log("string checked", response);

  return (
    <div>
      <Input placeholder="text" onChange={onChange} value={response.value} />
    </div>
  );
};

export { StringQuestion };
