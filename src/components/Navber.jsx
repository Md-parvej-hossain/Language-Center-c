import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar p-0 bg-base-100">
      <div className="flex-1">
        <a className="flex items-center  text-xl">
          <img
            className="w-24 h-24 rounded-full"
            src="https://i.ibb.co.com/3sJFxtR/logo.jpg"
            alt=""
          />
          <h2 className="text-2xl hidden md:block lg:block">
            Language <span className="text-sky-500">Center</span>{' '}
          </h2>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="flex list-none gap-5 text-lg text-[#2c3e50] ">
          <li>
            <Link to={'/'}>Home</Link>
          </li>

          <li>
            <Link to={'/findtutors'}>Find tutors</Link>
          </li>
          <li>
            <Link to={'/aboutus'}>About us</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </div>
        {user && (
          <div className="dropdown dropdown-end">
            <div></div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={'addtutprials'}>Add Tutorials</Link>
              </li>
              <li>
                <Link to={'mytutorials'}>My Tutorials</Link>
              </li>
              <li>
                <Link to={'mybookedtutor'}>My booked tutors</Link>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
