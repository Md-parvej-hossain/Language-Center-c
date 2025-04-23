import { useState } from 'react';
import {
  FaUser,
  FaMoneyBill,
  FaUsers,
  FaUserCircle,
  FaBars,
  FaHome,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Sidebare = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-base-200 min-h-screen p-4 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-16'
        } fixed`}
      >
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-sm btn-ghost"
          >
            <FaBars />
          </button>
          <Link to={'/'}>
            {' '}
            {isOpen && (
              <h2 className="text-xl font-bold text-[#009DE4] shadow-2xl">
                Dashboard
              </h2>
            )}{' '}
          </Link>
        </div>
        <ul className="menu p-0">
          <li>
            <Link to={'/dashboard/user'} className="flex items-center gap-2">
              <FaUser />
              {isOpen && 'User'}
            </Link>
          </li>
          <li>
            <Link to={'/'} className="flex items-center gap-2">
              <FaHome />
              {isOpen && 'Home'}
            </Link>
          </li>
          <li>
            <Link to={'/dashboard/payment'} className="flex items-center gap-2">
              <FaMoneyBill />
              {isOpen && 'Payment'}
            </Link>
          </li>
          <li>
            <Link
              to={'/dashboard/customer'}
              className="flex items-center gap-2"
            >
              <FaUsers />
              {isOpen && 'Customer'}
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2">
              <FaUserCircle />
              {isOpen && 'Profile'}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebare;
