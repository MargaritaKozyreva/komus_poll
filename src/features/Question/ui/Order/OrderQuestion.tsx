import React, { useState, useEffect } from "react";
import { QuestionType } from "@src/shared/api/types";
import { DraggableList } from "@src/shared/ui/DraggableList/DraggableList";
import { QuestionResponse, QuestionVariants } from "../types";
import styles from "./styles.module.scss";

const OrderQuestion: React.FC<QuestionType> = props => {
  const initialState = {
    type: QuestionVariants.ORDER,
    id: props.question_id,
    isRequired: props.required,
    value: props.entries,
  };

  const [state, setState] =
    useState<QuestionResponse<{ id: string; value: string }[]>>(initialState);

  const [itemList, getItemList] = useState<Array<{
    id: string;
    value: string;
  }> | null>(props.entries);

  useEffect(() => {
    localStorage.setItem(
      props.question_id.toString(),
      JSON.stringify(initialState)
    );
  }, []);

  useEffect(() => {
    setState({
      ...state,
      value: itemList,
    });
    localStorage.setItem(
      props.question_id.toString(),
      JSON.stringify({
        ...state,
        value: itemList,
      })
    );
  }, [JSON.stringify(itemList)]);

  console.log("order checked", state);

  return <DraggableList items={props.entries} getItemList={getItemList} />;
};

export default OrderQuestion;
