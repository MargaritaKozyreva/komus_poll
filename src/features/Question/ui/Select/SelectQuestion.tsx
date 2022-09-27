import { QuestionType } from "@src/shared/api/types";
import React, { useState } from "react";
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

  const [response, setQuestionResponse] = useState<QuestionResponse<String[]>>({
    type: QuestionVariants.SELECT,
    id: props.question_id,
    value: [plainOptions[0].value],
  });

  const onChange = e => {
    setQuestionResponse({
      ...response,
      value: e,
    });
  };

  console.log("select checked", response);
  return (
    <div>
      <Checkbox.Group
        options={plainOptions}
        defaultValue={[plainOptions[0].value]}
        onChange={onChange}
        className="ant-checkbox-wrapper-custom"
      />
    </div>
  );
};

export { SelectQuestion };
