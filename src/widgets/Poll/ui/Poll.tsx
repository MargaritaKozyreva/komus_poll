import React, { useEffect } from "react";
import { Poll, pollModel } from "@entities/Poll";
import { useData } from "@shared/helpers/hooks/useData";
import { WithSkeleton } from "@ui/WithSkeleton";

import cn from "classnames";
import styles from "./styles.module.scss";
import { PollDTO } from "@src/shared/api/dto";
import { useDispatch, useSelector } from "react-redux";
import { actions, slices, types } from "../model";
import { QuestionState } from "@src/features/Question/model/slices";

type PollWidgetProps = {
  pollId: string;
};

const PollWidget: React.FC<PollWidgetProps> = props => {
  const dispatch = useDispatch();

  const questionState = useSelector(
    (state: { questionInfo: QuestionState }) => state.questionInfo
  );
  console.log('###questionState ',questionState);

  const pollState = useSelector(
    (state: { poll: types.PollState }) => state.poll
  );

  useEffect(() => {
    dispatch(
      actions.getPollData({
        pollId: props.pollId,
      })
    );
  }, [dispatch]);

  return (
    <WithSkeleton
      isLoading={pollState.isLoading}
      isEmpty={pollState.entity === null}
    >
      <div className={cn(styles.root)}>
        {pollState.entity && (
          <>
            <Poll
              title={pollState.entity.title}
              questions={pollState.entity.questions}
            />
          </>
        )}
      </div>
    </WithSkeleton>
  );
};

export { PollWidget };
