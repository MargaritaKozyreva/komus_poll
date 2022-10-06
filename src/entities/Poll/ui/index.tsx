import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useState,
  useEffect,
} from "react";
import { QuestionInfo, ResponceQuestionType } from "@src/shared/api/types";
import Question from "../../../features/Question/ui/Question";
import { transformQuestionDataResponce } from "../helpers/transformEntry";
import QuestionLayout from "@src/features/Question/ui/QuestionLayout/QuestionLayout";
import styles from "./styles.module.scss";
import { Button } from "@src/shared/ui";
import { QuestionResponse } from "@src/features/Question/ui/types";
import { allStorage, onCheckAnswerHandler } from "../helpers/localStorage";
import { notification } from "antd";

interface PollProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  title: string;
  questions?: ResponceQuestionType[];
}

const Poll: React.FC<PollProps> = props => {
  const { className, title } = props;
  const questions = transformQuestionDataResponce(props.questions);
  const [isAllQuestionCorrectly, checkIsAllQuestionCorrectly] = useState<
    boolean | null
  >(null);
  const [questionUnorrectlyLength, checkQuestionUnorrectlyLength] =
    useState<number>(0);

  const act = () => {
    checkIsAllQuestionCorrectly(onCheckAnswerHandler().length === 0);
    checkQuestionUnorrectlyLength(onCheckAnswerHandler().length);
  };

  console.log("isAllQuestionCorrectly ", isAllQuestionCorrectly);

  useEffect(() => {
    console.log(7);
    questionUnorrectlyLength > 0 &&
      notification.info({
        message: "Внимание!",
        description: "некоторые обязательные вопросы не заполнены",
        duration: 5,
      });
  }, [questionUnorrectlyLength]);

  const memoList = React.useMemo(
    () =>
      questions.map((question, index) => (
        <QuestionLayout question={question} number={index + 1}>
          <Question {...question} />
        </QuestionLayout>
      )),
    []
  );

  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <div className={styles.questionsWrapper}>
        {memoList}
      </div>

      <Button onClick={act}>Завершить опрос</Button>
    </div>
  );
};

export { Poll };
