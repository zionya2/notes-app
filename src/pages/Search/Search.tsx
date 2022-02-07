import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navConfig } from '../../constants';
import { SearchNotes, setActiveId } from '../../redux/notesReducer/actions';
import { notesSelector, searchStringSelector } from '../../redux/notesReducer/selectors';
import { NoteSearch } from '../../components/NoteSearch/NoteSearch';
import { NoteTitle } from '../../components/NoteTitle/NoteTitle';
import classes from './Search.module.scss';

export const Search = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const notes = useSelector(notesSelector);
  const searchString = useSelector(searchStringSelector);
  const results = notes.filter(
    (note) => {
      if (!searchString) {
        return false;
      }

      return (note.description.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
      || note.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()));
    },
  );
  const onClick = useCallback((id:string) => {
    dispatch(setActiveId({ id }));
  }, [dispatch]);
  const noteElements = results.map((note) => (
    <NavLink key={note.id} to={`${navConfig.note.path}/${note.id}`}>
      <NoteSearch onClick={onClick} note={note} />
    </NavLink>
  ));
  useEffect(() => () => { dispatch(SearchNotes('')); }, [dispatch]);
  return (
    <div className={classes.searchWrapper}>
      <NoteTitle title={t('search_title')} />
      <div className={classes.noteWrapper}>{results.length ? noteElements : t('not_found')}</div>
    </div>
  );
};
