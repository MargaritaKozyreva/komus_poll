import React from "react";
import { Button as AntdButton, ButtonProps } from 'antd';
import styles from './styles.module.scss'

export type Props = ButtonProps & {
  size?: "m";
  mode?: "default";
  children?: any;
  value?: string;
};

export default function Button({
  mode = "default",
  children,
  value,
  icon,
  className,
  ...props
}: Props) {

  const text = value || children;

  return (
    <AntdButton {...props} className={styles.root}>
      <span className={styles.text}>{text}</span>
    </AntdButton>
  );
}