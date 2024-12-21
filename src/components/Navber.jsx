const Navber = () => {
  return (
    <div className="navbar bg-base-100">
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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a>Find tutors </a>
          </li>
        </div>
        <div className="dropdown dropdown-end">
          <div></div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Add Tutorials</a>
            </li>
            <li>
              <a> My Tutorials</a>
            </li>
            <li>
              <a>My booked tutors</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
