import classes from './NoteDate.module.scss';

type NoteDateEditProps = {
  date:string;
};

export const NoteDate = ({ date }:NoteDateEditProps) => (
  <div className={classes.dateEdit}>{date}</div>
);
