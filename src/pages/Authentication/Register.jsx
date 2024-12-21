import Lottie from 'lottie-react';

import registerLottiData from '../../assets/lotte/AnimationLotti.json';

const Register = () => {
  return (
    <div className="grid md:grid-cols-2 items-center ">
      <div>
        <Lottie animationData={registerLottiData}></Lottie>
        {/* <img
          className="w-7/12"
          src="https://i.ibb.co.com/dbwCqRz/desktop-illustration-step-1-x2.webp"
          alt=""
        /> */}
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register Now!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
