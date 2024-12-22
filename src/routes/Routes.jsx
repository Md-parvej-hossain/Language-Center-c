import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import Register from '../pages/Authentication/Register';
import Login from '../pages/Authentication/Login';
import PrivateRoute from './PrivateRouts';
import MyTutorials from '../pages/MyTutorials';
import Mybookedtutor from '../pages/Mybookedtutor';
import Addtutprials from '../pages/Addtutprials';
import Titorialsdetailspags from '../pages/Titorialsdetailspags';
import FindTutora from '../pages/FindTutora';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: 'Hi This is a erroe',
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/findtutors',
        element: <FindTutora />,
      },
      {
        path: '/mytutorials',
        element: (
          <PrivateRoute>
            <MyTutorials />
          </PrivateRoute>
        ),
      },
      {
        path: '/mybookedtutor',
        element: (
          <PrivateRoute>
            <Mybookedtutor />
          </PrivateRoute>
        ),
      },
      {
        path: '/addtutprials',
        element: (
          <PrivateRoute>
            <Addtutprials />
          </PrivateRoute>
        ),
      },
      {
        path: '/titorialsdetailspags',
        element: (
          <PrivateRoute>
            <Titorialsdetailspags />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
