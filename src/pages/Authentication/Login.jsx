import registerLottiData from '../../assets/lotte/login.json';
import Lottie from 'lottie-react';
const Signin = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center">
      <div className="w-6/12 mx-auto">
        <Lottie animationData={registerLottiData}></Lottie>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form className="card-body">
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
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="text-center bg-green-500 py-4 px-10 text-white text-2xl btn font-bold">
            Google
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
