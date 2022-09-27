import React from "react";
import styles from "./styles.module.scss";

type QuestionLayoutProps = {
  number?: number;
  title?: string;
  children?: React.ReactNode;
  image_id?: string;
};

const QuestionLayout: React.FC<QuestionLayoutProps> = ({
  title,
  number,
  image_id,
  children,
}) => {
  return (
    <div className={styles.question}>
      <div className={styles.title}>
        <span>{number}.</span>
        <h3>{title}</h3>
      </div>
      <div className={styles.content}>
        {image_id && (
          <img
            className={styles.image}
            src={`${process.env["PORTAL"]}${image_id}`}
            alt=""
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default QuestionLayout;
