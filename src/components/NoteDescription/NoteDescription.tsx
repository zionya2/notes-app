import classes from './NoteDescription.module.scss';

type NoteDescriptionProps = {
  description:string;
};
export const NoteDescription = ({ description }:NoteDescriptionProps) => (
  <div className={classes.description}>{description}</div>
);
