import React from 'react';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { getIsFetchCurrentUser } from 'redux/auth/auth-selectors';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoutes from 'components/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
// import s from './App.module.css';

const Home = lazy(() => import('../../pages/Home'));
const Auth = lazy(() => import('../../pages/Auth'));
const Login = lazy(() => import('../../pages/Login'));
const Contacts = lazy(() => import('../../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(getIsFetchCurrentUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !refresh && (
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route
                path="auth"
                element={
                  <PublicRoutes restricted>
                    <Auth />
                  </PublicRoutes>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoutes restricted>
                    <Login />
                  </PublicRoutes>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    )
  );
};

export default App;
