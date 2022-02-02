import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingNotes } from '../../redux/notesReducer/actions';
import { notesSelector } from '../../redux/notesReducer/selectors';
import classes from './SideBar.module.scss';

export const SideBar = () => {
  const dispatch = useDispatch();
  const notes = useSelector(notesSelector);
  useEffect(() => {
    dispatch(loadingNotes());
  }, [dispatch]);

  console.log('sidebar', notes);
  return (
    <>
      <div>Side Bar</div>
      <div>Side Bar</div>
      <div>Side Bar</div>
      <div>Side Bar</div>
      <div>Side Bar</div>
    </>
  );
};
