import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
      <div className="min-h-[calc(100vh-306px)] w-11/12 mx-auto">
        <Navber />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
