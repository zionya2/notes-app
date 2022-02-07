import { Input } from 'antd';
import { ChangeEvent } from 'react';
import classes from './TextArea.module.scss';

const { TextArea: AntdTextArea } = Input;

type TextAreaProps = {
  value: string;
  onChange: (event:ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder:string;
};

export const TextArea = ({ ...res }:TextAreaProps) => (
  <div className={classes.textAreaWrapper}>
    <AntdTextArea
      className={classes.textArea}
      {...res}
      autoSize={{ minRows: 3 }}
    />
  </div>
);
