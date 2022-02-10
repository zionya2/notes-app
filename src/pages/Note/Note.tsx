import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';
import { activeIdSelector, notesSelector } from '../../redux/notesReducer/selectors';
import { NoteDescription } from '../../components/NoteDescription/NoteDescription';
import { NoteDate } from '../../components/NoteDate/NoteDate';
import { NoteTitle } from '../../components/NoteTitle/NoteTitle';
import { transformDate } from '../../utils/transformDate';
import { navConfig } from '../../constants';

export const Note = () => {
  const { t } = useTranslation();
  const id = useSelector(activeIdSelector);
  const notes = useSelector(notesSelector);
  const note = notes.find((item) => item.id === id);
  const date = useMemo(() => transformDate(note?.lastModified), [note?.lastModified]);
  return (
    id ? (
      <>
        <NoteDate date={`${date.day} ${t(`month_${date.month}`)} ${date.year},${date.time}`} />
        <NoteTitle title={note?.title || t('title')} />
        <NoteDescription description={note?.description || ''} />
      </>
    ) : <Navigate to={navConfig.base.path} />
  );
};
