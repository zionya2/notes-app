import classes from './NoteItemTitle.module.scss';

type NoteItemTitleProps = {
  text: string;
};
export const NoteItemTitle = ({ text }:NoteItemTitleProps) => (
  <p className={classes.title}>{text}</p>
);
