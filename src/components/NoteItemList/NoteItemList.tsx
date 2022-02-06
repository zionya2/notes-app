import { NavLink } from 'react-router-dom';
import { navConfig } from '../../constants';
import { TNote } from '../../types';
import { NoteItem } from '../NoteItem/NoteItem';
import classes from './NoteItemList.module.scss';

type NoteListProps = {
  notes: TNote[];
  activeId: string;
  onClick: (id:string) => void;
};

export const NoteItemList = ({ notes, onClick, activeId }:NoteListProps) => {
  const noteElements = notes.map(
    (note) => (
      <NavLink key={note.id} to={`${navConfig.note.path}/${note.id}`}>
        <NoteItem activeId={activeId} onClick={onClick} note={note} />
      </NavLink>
    ),
  );
  return (
    <div className={classes.listWrapper}>
      {noteElements}
    </div>
  );
};
