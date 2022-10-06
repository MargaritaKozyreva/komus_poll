import { QuestionType } from "@src/shared/api/types";
import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { QuestionResponse, QuestionVariants } from "../types";
import "./styles.css";

const SelectQuestion: React.FC<QuestionType> = props => {
  const plainOptions = props.entries.map(entry => {
    return {
      label: entry.value,
      value: entry.id,
    };
  });

  const initialState = {
    type: QuestionVariants.SELECT,
    id: props.question_id,
    isRequired: props.required,
    value: [plainOptions[0].value],
  }

  const [response, setQuestionResponse] = useState<QuestionResponse<String[]>>(initialState);

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

  console.log("select checked", response);
  return (
    <div
      className={`checked ${
        props.required && response.value.length === 0 ? `required` : ``
      }`}
    >
      <Checkbox.Group
        options={plainOptions}
        defaultValue={[plainOptions[0].value]}
        onChange={onChange}
        className={`ant-checkbox-wrapper-custom`}
      />
    </div>
  );
};

export { SelectQuestion };
