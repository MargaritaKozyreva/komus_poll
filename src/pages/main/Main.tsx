import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { PollWidget } from '../../widgets/Poll/ui';

const Main: React.FC<any> = () => {
  return (
    <div>
      <PollWidget pollId='1' />
    </div>
  );
};

export default Main;
