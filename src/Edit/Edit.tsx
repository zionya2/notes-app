import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Input } from '../components/Input/Input';
import { NoteDate } from '../components/NoteDate/NoteDate';
import { TextArea } from '../components/TextArea/TextArea';
import { navConfig } from '../constants';
import { updateNote } from '../redux/notesReducer/actions';
import { activeNoteSelector } from '../redux/notesReducer/selectors';
import { transformDate } from '../utils/transformDate';

export const Edit = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const note = useSelector(activeNoteSelector);
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
      </>
    )
      : <Navigate to={navConfig.base.path} />
  );
};
