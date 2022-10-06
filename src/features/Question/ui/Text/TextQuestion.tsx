import { QuestionType } from "@src/shared/api/types";
import React, { useEffect, useState } from "react";
import { QuestionResponse, QuestionVariants } from "../types";
import { Input } from "antd";
const { TextArea } = Input;

const TextQuestion: React.FC<QuestionType> = props => {
  const initialState = {
    type: QuestionVariants.TEXT,
    id: props.question_id,
    isRequired: props.required,
    value: "",
  };

  const [response, setQuestionResponse] =
    useState<QuestionResponse<String>>(initialState);

  useEffect(() => {
    localStorage.setItem(
      props.question_id.toString(),
      JSON.stringify(initialState)
    );
  }, []);

  const onChange = e => {
    const state = {
      ...response,
      value: e.target.value,
    };
    setQuestionResponse(state);
    localStorage.setItem(props.question_id.toString(), JSON.stringify(state));
  };
  console.log("textarea checked", response);

  return (
    <div
      className={`checked ${
        props.required && response.value === "" ? `required` : ``
      }`}
    >
      <TextArea rows={4} onChange={onChange}>
        {response.value}
      </TextArea>
    </div>
  );
};

export { TextQuestion };
