import { Route, Routes as AppRoutes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';

export const Routes = () => (
  <AppRoutes>
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        path="/"
        element="<div>notes</div>"
      />
      <Route
        path="/edit"
        element="<div>edit</div>"
      />
    </Route>
  </AppRoutes>
);
