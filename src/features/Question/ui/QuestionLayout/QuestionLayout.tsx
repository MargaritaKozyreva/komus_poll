import { QuestionType } from "@src/shared/api/types";
import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./styles.module.scss";

type QuestionLayoutProps = {
  question: QuestionType;
  number: number;
};

const QuestionLayout: React.FC<
  PropsWithChildren<QuestionLayoutProps>
> = props => {
  const {
    question: { question_title, image_id, required },
    number,
    children,
  } = props;
  return (
    <div className={styles.question}>
      <div className={styles.title}>
        <span>{number}.</span>
        <h3>{question_title}</h3>
      </div>
      <div className={styles.content}>
        {image_id && (
          <img
            className={styles.image}
            src={`${process.env["PORTAL"]}${image_id}`}
            alt=""
          />
        )}
        <div className={required ? styles.required : null}>{children}</div>
      </div>
    </div>
  );
};

export default QuestionLayout;
