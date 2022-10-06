import { QuestionType } from "@src/shared/api/types";
import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { QuestionResponse, QuestionVariants } from "../types";

const { Option } = Select;

const ComboQuestion: React.FC<QuestionType> = props => {
  const initialState = {
    type: QuestionVariants.COMBO,
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

  const onChange = value => {
    const state = {
      ...response,
      value,
    };
    setQuestionResponse(state);
    localStorage.setItem(props.question_id.toString(), JSON.stringify(state));
  };

  console.log("combo checked", response);

  return (
    <div>
      <Select
        defaultValue={response.value}
        style={{
          width: 120,
        }}
        onChange={onChange}
      >
        {props.entries.map(entry => (
          <Option value={entry.id}>{entry.value}</Option>
        ))}
      </Select>
    </div>
  );
};

export { ComboQuestion };
