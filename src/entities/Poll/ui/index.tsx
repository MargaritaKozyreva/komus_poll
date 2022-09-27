import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import { ResponceQuestionType } from "@src/shared/api/types";
import Question from "../../../features/Question/ui/Question";
import { transformQuestionDataResponce } from "../helpers/transformEntry";
import QuestionLayout from "@src/features/Question/ui/QuestionLayout/QuestionLayout";
import styles from "./styles.module.scss";
import { Button } from "@src/shared/ui";

interface PollProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  title: string;
  questions?: ResponceQuestionType[];
}

const Poll: React.FC<PollProps> = props => {
  const { className, title } = props;
  const questions = transformQuestionDataResponce(props.questions);
  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <div className={styles.questionsWrapper}>
        {questions.map((question, index) => (
          <QuestionLayout
            title={question.question_title}
            number={index + 1}
            image_id={question.image_id}
          >
            <Question {...question} />
          </QuestionLayout>
        ))}
      </div>

      <Button>Завершить опрос</Button>
    </div>
  );
};

export { Poll };
