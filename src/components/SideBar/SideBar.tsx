import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveId } from '../../redux/notesReducer/actions';
import { activeIdSelector, notesSelector } from '../../redux/notesReducer/selectors';
import { NoteItemList } from '../NoteItemList/NoteItemList';

export const Sidebar = () => {
  const notes = useSelector(notesSelector);
  const activeId = useSelector(activeIdSelector);
  const dispatch = useDispatch();
  const onClick = useCallback((id:string) => {
    dispatch(setActiveId({ id }));
  }, [dispatch]);
  return (
    <NoteItemList activeId={activeId} notes={notes} onClick={onClick} />
  );
};
