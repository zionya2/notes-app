import classes from './NoteNotActive.module.scss';

type NoteNotActiveProps = {
  text:string;
};
export const NoteNotActive = ({ text }:NoteNotActiveProps) => (
  <div className={classes.wrapper}>
    <div>{text}</div>
  </div>
);
