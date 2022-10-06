import { QuestionType } from "@src/shared/api/types";
import React, { useEffect, useState } from "react";
import { QuestionResponse, QuestionVariants } from "../types";
import { Input } from "antd";

const StringQuestion: React.FC<QuestionType> = props => {
  const initialState = {
    type: QuestionVariants.STRING,
    id: props.question_id,
    isRequired: props.required,
    value: "",
  };

  const [response, setQuestionResponse] =
    useState<QuestionResponse<string>>(initialState);

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
  console.log("string checked", response);

  return (
    <div
      className={`checked ${
        props.required && response.value === "" ? `required` : ``
      }`}
    >
      <Input placeholder="text" onChange={onChange} value={response.value} />
    </div>
  );
};

export { StringQuestion };
