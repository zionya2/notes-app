import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Input } from '../../components/UI/Input/Input';
import { NoteDate } from '../../components/NoteDate/NoteDate';
import { TextArea } from '../../components/UI/TextArea/TextArea';
import { navConfig } from '../../constants';
import { updateNote } from '../../redux/notesReducer/actions';
import { activeIdSelector, notesSelector } from '../../redux/notesReducer/selectors';
import { transformDate } from '../../utils/transformDate';
import classes from './Edit.module.scss';

export const Edit = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const activeId = useSelector(activeIdSelector);
  const notes = useSelector(notesSelector);
  const note = notes.find((item) => item.id === activeId);
  const date = transformDate(note?.lastModified);
  const [title, setTitle] = useState(note?.title || '');
  const [description, setDescription] = useState(note?.description || '');
  const onChangeDescription = (event:ChangeEvent<HTMLTextAreaElement>) => {
    const noteEdit = {
      id: note?.id || '',
      title,
      description: event.target.value,
      lastModified: new Date().toLocaleString(),
    };
    setDescription(event.target.value);
    dispatch(updateNote(noteEdit));
  };
  const onChangeTitle = (event:ChangeEvent<HTMLInputElement>) => {
    const noteEdit = {
      id: note?.id || '',
      title: event.target.value,
      description,
      lastModified: new Date().toLocaleString(),
    };
    setTitle(event.target.value);
    dispatch(updateNote(noteEdit));
  };
  return (
    note ? (
      <>
        <NoteDate date={`${date.day} ${t(`month_${date.month}`)} ${date.year},${date.time}`} />
        <div className={classes.wrapper}>
          <Input
            size="middle"
            placeholder={t('title_placeholder')}
            value={title}
            onChange={onChangeTitle}
          />
          <TextArea
            value={description}
            placeholder={t('description_placeholder')}
            onChange={onChangeDescription}
          />
        </div>
      </>
    )
      : <Navigate to={navConfig.base.path} />
  );
};
