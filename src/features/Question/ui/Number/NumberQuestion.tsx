import { QuestionType } from "@src/shared/api/types";
import { InputNumber } from "antd";
import React, { useState } from "react";
import { QuestionResponse, QuestionVariants } from "../types";

const NumberQuestion: React.FC<QuestionType> = props => {
  const [response, setQuestionResponse] = useState<QuestionResponse<number>>({
    type: QuestionVariants.NUMBER,
    id: props.question_id,
    value: 0,
  });

  const onChange = e => {
    setQuestionResponse({
      ...response,
      value: e,
    });
  };

  console.log("number checked", response);
  return (
    <div>
      <InputNumber defaultValue={0} onChange={onChange} />
    </div>
  );
};

export { NumberQuestion };
