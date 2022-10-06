import { QuestionType } from "@src/shared/api/types";
import { Radio, Space } from "antd";
import React, { useState, useEffect } from "react";
import { QuestionResponse, QuestionVariants } from "../types";
import "./index.css";

const ChoiseQuestionAnswer: React.FC<QuestionType> = props => {
  const initialState = {
    type: QuestionVariants.CHOISE,
    id: props.question_id,
    isRequired: props.required,
    value: props.entries[0].id,
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

  console.log("###choise checked", response);
  return (
    <Radio.Group onChange={onChange} value={response.value}>
      <Space direction="vertical">
        {props.entries.map(entry => (
          <Radio value={entry.id}>{entry.value}</Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export const ChoiseQuestion = React.memo(ChoiseQuestionAnswer);
