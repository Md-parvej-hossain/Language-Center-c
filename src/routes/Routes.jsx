import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: 'Hi This is a erroe',
    children: [
      {
        path: '/',
        element:<Home/>
      }
    ]
  },
]);

export default router;
