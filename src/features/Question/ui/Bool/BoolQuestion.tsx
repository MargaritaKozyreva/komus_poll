import { QuestionType } from "@src/shared/api/types";
import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import { QuestionResponse, QuestionVariants } from "../types";
import "./index.css";
import styles from "./styles.module.scss";

const BoolQuestion: React.FC<QuestionType> = props => {
  const [check, setCheck] = useState<boolean>(true);
  const [state, setState] = useState<QuestionResponse<boolean>>({
    type: QuestionVariants.BOOL,
    id: props.question_id,
    value: check,
  });

  useEffect(() => {
    setState({
      ...state,
      value: check,
    });
  }, [check]);

  console.log("bool checked", state);

  return (
    <div className={styles.root}>
      <span>Нет</span>
      <Switch checked={check} onChange={() => setCheck(!check)} />
      <span>Да</span>
    </div>
  );
};

export { BoolQuestion };
