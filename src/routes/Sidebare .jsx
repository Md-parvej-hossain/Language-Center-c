import { useState } from 'react';
import { FaUserCircle, FaBars, FaHome, FaRegAddressCard } from 'react-icons/fa';
import { TbBrandBooking } from 'react-icons/tb';
import { MdOutlineMyLocation } from 'react-icons/md';

import { Link } from 'react-router-dom';
const Sidebare = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-base-200 min-h-screen p-2 md:p-4 transition-all duration-300 ${
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
            <Link to={'/dashboard/mytutor'} className="flex items-center gap-2">
              <MdOutlineMyLocation />
              {isOpen && 'My Tutorials'}
            </Link>
          </li>

          <li>
            <Link to={'/dashboard/mybook'} className="flex items-center gap-2">
              <TbBrandBooking />
              {isOpen && ' My booked tutors'}
            </Link>
          </li>
          <li>
            <Link
              to={'/dashboard/addtutprials'}
              className="flex items-center gap-2"
            >
              <FaRegAddressCard />
              {isOpen && ' Add Tutorials'}
            </Link>
          </li>
          <li>
            <Link to={'/'} className="flex items-center gap-2">
              <FaHome />
              {isOpen && 'Home'}
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
