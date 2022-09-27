import { QuestionType } from "@src/shared/api/types";
import React, { useState } from "react";
import { Select } from "antd";
import { QuestionResponse, QuestionVariants } from "../types";

const { Option } = Select;

const ComboQuestion: React.FC<QuestionType> = props => {
  const [response, setQuestionResponse] = useState<QuestionResponse<String>>({
    type: QuestionVariants.COMBO,
    id: props.question_id,
    value: props.entries[0].id,
  });

  const onChange = value => {
    setQuestionResponse({
      ...response,
      value,
    });
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
