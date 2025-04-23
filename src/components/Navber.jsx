import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const navlink = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>

      <li>
        <NavLink to={'/content'}>Content</NavLink>
      </li>

      <li>
        <NavLink to={'/findtutors'}>Find tutors</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to={'/mytutorials'}>My Tutorials</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to={'/mybookedtutor'}>My booked tutors</NavLink>
        </li>
      )}
      <li>
        <NavLink to={'/aboutus'}>Our Center</NavLink>
      </li>
    </>
  );
  const profile = (
    <>
      <li>
        <Link to={'addtutprials'}>Add Tutorials</Link>
      </li>
      <li>
        <Link to={'dashboard'}>Dashboard</Link>
      </li>
      <li>
        <button onClick={logOut}>Logout</button>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 fixed z-10 glass">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navlink}
            </ul>
          </div>

          <img
            className="w-20 h-20 rounded-full"
            src="https://i.ibb.co.com/3sJFxtR/logo.jpg"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-10">{navlink}</ul>
        </div>
        <div className="navbar-end">
          {/* //secens */}

          <div className=" bg-base-100 items-center justify-center">
            <div className="flex items-center justify-center gap-5">
              <div className="dropdown dropdown-end flex items-center gap-5">
                {!user && (
                  <Link to="/login" className="btn">
                    Login
                  </Link>
                )}
                {user && (
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div
                        title={user?.displayName}
                        className="w-10 rounded-full"
                      >
                        <img
                          referrerPolicy="no-referrer"
                          alt="User Profile Photo"
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                      {profile}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* secend */}
        </div>
      </div>
    </div>
  );
};

export default Navber;
