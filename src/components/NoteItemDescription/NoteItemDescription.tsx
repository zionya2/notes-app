import classes from './NoteItemDescription.module.scss';

type NoteItemDescriptionProps = {
  date: string;
  description: string;
};
export const NoteItemDescription = ({ date, description }:NoteItemDescriptionProps) => (
  <p className={classes.description}>
    <span>{`${date} `}</span>
    {description}
  </p>
);
