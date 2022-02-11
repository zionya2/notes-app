/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useTranslation } from 'react-i18next';
import { TNote } from '../../types';
import classes from './NoteSearch.module.scss';
import { checkDateToDay } from '../../utils/checkDateToDay';
import { NoteItemDescription } from '../NoteItemDescription/NoteItemDescription';
import { NoteItemTitle } from '../NoteItemTitle/NoteItemTitle';

type NoteSearchProps = {
  note: TNote;
  onClick: (id:string) => void;
};

export const NoteSearch = ({ note, onClick }:NoteSearchProps) => {
  const { t } = useTranslation();
  const date = checkDateToDay(note.lastModified)
    ? note.lastModified.split(', ')[1].split(':').splice(0, 2).join(':')
    : note.lastModified.split(',')[0];
  const handlerClick = () => {
    onClick(note.id);
  };
  return (
    <div className={classes.wrapperItem}>
      <div onClick={handlerClick} className={`${classes.item} item`} aria-hidden="true">
        <NoteItemTitle text={note.title || t('title')} />
        <NoteItemDescription date={date} description={note.description || t('default_description')} />
      </div>
    </div>
  );
};
