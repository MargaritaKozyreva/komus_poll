import React from "react";
import { Poll, pollModel } from "@entities/Poll";
import { useData } from "@shared/helpers/hooks/useData";
import { WithSkeleton } from "@ui/WithSkeleton";

import cn from "classnames";
import styles from "./styles.module.scss";
import { PollDTO } from "@src/shared/api/dto";

type PollWidgetProps = {
  pollId: string;
};

const PollWidget: React.FC<PollWidgetProps> = props => {
  const { data, isLoading, isError } = useData<PollDTO>(() =>
    pollModel.requests.getPollById(props.pollId)
  );

  return (
    <WithSkeleton isLoading={isLoading} isEmpty={data === null}>
      <div className={cn(styles.root)}>
        {data && (
          <>
            <Poll title={data.title} questions={data.questions} />
          </>
        )}
      </div>
    </WithSkeleton>
  );
};

export { PollWidget };
