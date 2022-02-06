import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';
import { activeNoteSelector } from '../../redux/notesReducer/selectors';
import { NoteDescription } from '../NoteDescription/NoteDescription';
import { NoteDate } from '../NoteDate/NoteDate';
import { NoteTitle } from '../NoteTitle/NoteTitle';
import { transformDate } from '../../utils/transformDate';
import { navConfig } from '../../constants';

export const Note = () => {
  const { t } = useTranslation();
  const note = useSelector(activeNoteSelector);
  const date = transformDate(note?.lastModified);
  const text = useMemo(() => note?.description.replace('\n', '<br>'), [note?.description]);
  return (
    note ? (
      <>
        <NoteDate date={`${date.day} ${t(`month_${date.month}`)} ${date.year},${date.time}`} />
        <NoteTitle title={note?.title || ''} />
        <NoteDescription description={text || ''} />
      </>
    ) : <Navigate to={navConfig.base.path} />
  );
};
