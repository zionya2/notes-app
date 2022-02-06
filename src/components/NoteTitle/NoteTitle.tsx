import classes from './NoteTitle.module.scss';

type NoteTitleProps = {
  title:string;
};
export const NoteTitle = ({ title }:NoteTitleProps) => (
  <div className={classes.title}>{title}</div>
);
