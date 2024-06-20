import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { refreshThunk } from './redux/users/operations';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { app } from './services/firebase';
import { selectUsersIsRefreshing } from './redux/users/selects';
import { PrivateRoute } from './components/PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Psychologists = lazy(() => import('pages/Psychologists'));
const Favorites = lazy(() => import('pages/Favorites'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUsersIsRefreshing);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(refreshThunk());
      }
    });

    return () => unsubscribe();
  }, [dispatch, auth]);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="psychologists" element={<Psychologists />} />
            <Route
              path="favorites"
              element={<PrivateRoute component={Favorites} redirectTo="/" />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
