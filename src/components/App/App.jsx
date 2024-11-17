import toast, { Toaster } from 'react-hot-toast';
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import css from './App.module.css';

import {
  selectIsRefreshing,
  selectError,
  selectIsLoggedIn,
} from '../../redux/auth/selectors';

import { refreshUser } from '../../redux/auth/operations';

import Layout from '../Layout/Layout';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (isLoggedIn) {
      toast.success('Successful user identification!');
    }
  }, [isLoggedIn]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <>
      <Layout>
        <div className={css.appContainer}>
          <Suspense fallback={<p>Loading page...</p>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={<RestrictedRoute component={<RegistrationPage />} />}
              />
              <Route
                path="/login"
                element={<RestrictedRoute component={<LoginPage />} />}
              />
              <Route
                path="/contacts"
                element={<PrivateRoute component={<ContactsPage />} />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </Layout>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
