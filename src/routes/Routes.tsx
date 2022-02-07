import { useTranslation } from 'react-i18next';
import { Navigate, Route, Routes as AppRoutes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Note } from '../components/Note/Note';
import { NoteNotActive } from '../components/NoteNotActive/NoteNotActive';
import { navConfig } from '../constants';
import { Edit } from '../components/Edit/Edit';
import { Search } from '../components/Search/Search';

export const Routes = () => {
  const { t } = useTranslation();
  return (
    <AppRoutes>
      <Route
        path={navConfig.base.path}
        element={<Layout />}
      >
        <Route
          index
          element={<NoteNotActive text={t('not_active_note')} />}
        />
        <Route
          path={`${navConfig.note.path}/:id`}
          element={<Note />}
        />
        <Route
          path={navConfig.edit.path}
          element={<Edit />}
        />
        <Route
          path={navConfig.search.path}
          element={<Search />}
        />
        <Route
          path="*"
          element={<Navigate to={navConfig.base.path} />}
        />
      </Route>
    </AppRoutes>
  );
};
