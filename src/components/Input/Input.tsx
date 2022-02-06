import { Input as AntdInput } from 'antd';
import { ChangeEvent } from 'react';
import classes from './Input.module.scss';

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (event:ChangeEvent<HTMLInputElement>) => void
  size?: 'small' | 'middle' | 'large' | undefined;
};

export const Input = ({ value, ...res }:InputProps) => (
  <div className={classes.inputWrapper}>
    <AntdInput
      className={classes.input}
      value={value}
      {...res}
      bordered
    />
  </div>
);

Input.defaultProps = {
  size: 'middle',
};
