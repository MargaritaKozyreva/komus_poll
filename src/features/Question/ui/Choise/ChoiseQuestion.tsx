import { QuestionType } from "@src/shared/api/types";
import { Radio, Space } from "antd";
import React, { useState } from "react";
import { QuestionResponse, QuestionVariants } from "../types";
import './index.css'

const ChoiseQuestion: React.FC<QuestionType> = props => {
  const [response, setQuestionResponse] = useState<QuestionResponse<String>>({
    type: QuestionVariants.CHOISE,
    id: props.question_id,
    value: props.entries[0].id,
  });

  const onChange = e => {
    setQuestionResponse({
      ...response,
      value: e.target.value,
    });
  };
  console.log("choise checked", response);
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

export { ChoiseQuestion };
