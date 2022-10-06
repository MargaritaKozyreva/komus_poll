import { QuestionType } from "@src/shared/api/types";
import React, { useState, useEffect } from "react";
import { QuestionResponse, QuestionVariants } from "../types";
import styles from "./styles.module.scss";
import { Switch } from "antd";
import "./index.css";

const BoolQuestion: React.FC<QuestionType> = props => {
  const initialState = {
    type: QuestionVariants.BOOL,
    id: props.question_id,
    isRequired: props.required,
    value: true,
  };
  const [state, setState] = useState<QuestionResponse<boolean>>(initialState);

  useEffect(() => {
    localStorage.setItem(
      props.question_id.toString(),
      JSON.stringify(initialState)
    );
  }, []);

  const handlerFn = e => {
    const state = {
      ...initialState,
      value: e,
    };
    setState(state);
    localStorage.setItem(props.question_id.toString(), JSON.stringify(state));
  };

  console.log("#####bool checked", state);
  return (
    <div className={styles.root}>
      <span>Нет</span>
      <Switch checked={state.value} onChange={handlerFn} />
      <span>Да</span>
    </div>
  );
};

export { BoolQuestion };
