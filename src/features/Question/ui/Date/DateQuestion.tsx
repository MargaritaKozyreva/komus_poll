import { QuestionType } from "@src/shared/api/types";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
import { QuestionResponse, QuestionVariants } from "../types";

const DateQuestion: React.FC<QuestionType> = props => {
  const initialState = {
    type: QuestionVariants.DATE,
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

  const dateFormat = "DD.MM.YYYY";

  const onChange = (date, dateString) => {
    const state = {
      ...response,
      value: dateString,
    };
    setQuestionResponse(state);
    localStorage.setItem(props.question_id.toString(), JSON.stringify(state));
  };
  console.log("date checked", response);

  return (
    <div
      className={`checked ${
        props.required && response.value === "" ? `required` : ``
      }`}
    >
      <DatePicker onChange={onChange} format={dateFormat} />
    </div>
  );
};

export { DateQuestion };
