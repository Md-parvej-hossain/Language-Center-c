import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import registerLottiData from '../../assets/lotte/AnimationLotti.json';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, createUser, updateUserProfile, setUser } =
    useContext(AuthContext);

  const handleSignUp = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const pass = form.password.value;
    console.log({ email, pass, name, photo });
    try {
      //2. User Registration
      const result = await createUser(email, pass);
      console.log(result);
      await updateUserProfile(name, photo);
      setUser({ ...result.user, photoURL: photo, displayName: name });
      toast.success('Signup Successful');
      navigate('/');
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // Google Signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      toast.success('Signin Successful');
      navigate('/');
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <div className="grid md:grid-cols-2 items-center mb-10 ">
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl pb-10">
        <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-3xl text-center font-bold">Register Now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="url"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered rounded-none"
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
          <div className="form-control mt-6 rounded-none">
            <button className="btn  text-white font-semibold bg-[#CB9DF0] rounded-none">
              Register Now!
            </button>
          </div>
          <p className="text-center pb-2 font-semibold">
            Allready have an account ?{' '}
            <Link className="text-red-500" to={'/login'}>
              Login
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
      <div className='ml-20'>
        <Lottie animationData={registerLottiData}></Lottie>
      </div>
    </div>
  );
};

export default Register;
