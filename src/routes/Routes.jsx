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
import About from '../components/About';
import Update from '../pages/Update';

import Content from '../components/Content';
import Error from '../components/Error';
import DashBoard from '../layout/DashBoard';
import Profile from '../components/dashboard/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
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
      //about component no pagess
      {
        path: '/aboutus',
        element: <About />,
      },

      {
        path: '/content',
        element: <Content />,
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
        path: '/titorialsdetailspags/:id',
        element: (
          <PrivateRoute>
            <Titorialsdetailspags />
          </PrivateRoute>
        ),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
    children: [
      {
        path: '/dashboard/profile',
        element: <Profile />,
      },
    ],
  },
]);

export default router;
