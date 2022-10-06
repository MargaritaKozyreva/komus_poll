import { QuestionType } from "@src/shared/api/types";
import { InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { QuestionResponse, QuestionVariants } from "../types";

const NumberQuestion: React.FC<QuestionType> = props => {
  const initialState = {
    type: QuestionVariants.NUMBER,
    id: props.question_id,
    isRequired: props.required,
    value: 0,
  };

  const [response, setQuestionResponse] =
    useState<QuestionResponse<number>>(initialState);

  useEffect(() => {
    localStorage.setItem(
      props.question_id.toString(),
      JSON.stringify(initialState)
    );
  }, []);

  const onChange = e => {
    const state = {
      ...response,
      value: e,
    };
    setQuestionResponse(state);
    localStorage.setItem(props.question_id.toString(), JSON.stringify(state));
  };

  console.log("number checked", response);
  return (
    <div>
      <InputNumber defaultValue={0} onChange={onChange} />
    </div>
  );
};

export { NumberQuestion };
