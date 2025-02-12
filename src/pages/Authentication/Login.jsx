import toast from 'react-hot-toast';
import registerLottiData from '../../assets/lotte/login.json';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';
  // console.log(from)
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  // Google Signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success('Signin Successful');
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // Email Password Signin
  const handleSignIn = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log({ email, pass });
    try {
      //User Login
      await signIn(email, pass);
      toast.success('Signin Successful');
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 items-center">
      <div className="w-6/12 mx-auto">
        <Lottie animationData={registerLottiData}></Lottie>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleSignIn} className="card-body">
          <h1 className="text-3xl text-center font-bold">Login Now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered rounded-none"
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
              className="input input-bordered rounded-none"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white font-semibold bg-[#CB9DF0] rounded-none">
              Login
            </button>
          </div>
          <p className="text-center pb-2 font-semibold">
            Dont’t Have An Account ?
            <Link className="text-red-500" to={'/register'}>
              Register
            </Link>
          </p>
          <div className="divider divide-gray-100 text-[#6A6F77]">
            Other log in options
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="text-center bg-[#EBEAFF]  text-[#A294F9] text-2xl btn font-bold rounded-none"
          >
            Google
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
