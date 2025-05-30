const Footer = () => {
  return (
    <div className="bg-[#3E3C36]">
      <div className="text-center p-10">
        <h1 className="text-[#969696] font-bold text-5xl">Newsletter</h1>
        <p className="text-lg text-[#5BD9B3] font-semibold pt-5">
          Get the Latest News and Special Offers
        </p>
        <form className="w-7/12 mx-auto mt-10">
          <div className="flex p-1 overflow-hidden  rounded-lg  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 w-full text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Your Email"
              aria-label="Enter Your Email"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>

      <footer className="footer  text-[#969696] p-10">
        <p> </p>
        <nav>
          <h6 className="footer-title">Conditions</h6>
          <a className="link link-hover">For Semester Courses</a>
          <a className="link link-hover">For 3-week Intensive Course</a>
          <a className="link link-hover">For Intensive Summer Courses</a>
          <a className="link link-hover">For Individual Courses</a>
        </nav>
        <nav>
          <h6 className="footer-title">Menu</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover"> Language Holidays</a>
          <a className="link link-hover">Language Corner</a>
          <a className="link link-hover">Gallery FAQ</a>
        </nav>
        <nav>
          <h6 className="footer-title">Useful Info</h6>
          <a className="link link-hover"> Working with Us</a>
          <a className="link link-hover">Online Placement Test</a>
          <a className="link link-hover">Testimonials</a>
          <a className="link link-hover">Student Handbook</a>
          <a className="link link-hover">Study Guide</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover text-sky-400"> Facebook</a>
          <a className="link link-hover text-sky-400">Instagram</a>
          <a className="link link-hover text-sky-400">Youtube</a>
          <a className="link link-hover text-sky-400">Linkedin</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
