import React, { useState, useEffect } from "react";
import { QuestionType } from "@src/shared/api/types";
import { DraggableList } from "@src/shared/ui/DraggableList/DraggableList";
import { QuestionResponse, QuestionVariants } from "../types";
import styles from "./styles.module.scss";

const OrderQuestion: React.FC<QuestionType> = props => {
  const [itemList, getItemList] = useState<Array<{
    id: string;
    value: string;
  }> | null>(props.entries);

  const [state, setState] =
    useState<QuestionResponse<{ id: string; value: string }[]>>();

  useEffect(() => {
    setState({
      type: QuestionVariants.ORDER,
      id: props.question_id,
      value: itemList,
    });
  }, [JSON.stringify(itemList)]);

  console.log("order checked", state);

  return <DraggableList items={props.entries} getItemList={getItemList} />;
};

export default OrderQuestion;
