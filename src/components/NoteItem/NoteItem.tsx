/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useTranslation } from 'react-i18next';
import { TNote } from '../../types';
import classes from './NoteItem.module.scss';
import { checkDateToDay } from '../../utils/checkDateToDay';

type NoteItemProps = {
  note: TNote;
  activeId?: string;
  onClick: (id:string) => void;
};

export const NoteItem = ({ note, onClick, activeId }:NoteItemProps) => {
  const { t } = useTranslation();
  const changeActive = activeId === note.id ? classes.active : '';
  const date = checkDateToDay(note.lastModified)
    ? note.lastModified.split(', ')[1].split(':').splice(0, 2).join(':')
    : note.lastModified.split(',')[0];
  const handlerClick = () => {
    onClick(note.id);
  };
  return (
    <div className={`${classes.wrapperItem} ${changeActive}`}>
      <div onClick={handlerClick} className={`${classes.item} item`} aria-hidden="true">
        <p className={classes.title}>{note.title || t('title')}</p>
        <p>
          <span>{`${date} `}</span>
          {note.description || t('default_description')}
        </p>
      </div>
    </div>
  );
};

NoteItem.defaultProps = {
  activeId: '',
};
