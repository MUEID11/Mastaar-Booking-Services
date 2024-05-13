import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../../public/vite.png";
import { FaGoogle } from "react-icons/fa6";
import login from "./../../assets/login.svg";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, signInWithGoogle,user, loading } = useAuth();
 
  //handle googleSignIn
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Sign in successfull");
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };
  //handle email sign in
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await signIn(email, password);
      console.log(result);
      navigate(location?.state ? location?.state : "/");
      toast.success("Sign in successfull");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100vh-260px)]">
        <Helmet>
            <title>
                Login
            </title>
        </Helmet>
        <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg  lg:max-w-4xl py-12">
          <div
            className="hidden bg-cover bg-center lg:block lg:w-1/2"
            style={{
              backgroundImage: `url(${login})`,
            }}
          ></div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
            </div>

            <p className="mt-3 text-xl text-center text-gray-600 ">
              Please Sign In!
            </p>

            <div
              onClick={handleGoogleSignIn}
              className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
            >
              <div className="px-4 py-2">
                <FaGoogle />
              </div>
              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
                or login with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSignIn}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  autoComplete="email"
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>

                <input
                  id="password"
                  autoComplete="current-password"
                  name="password"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  md:w-1/4"></span>

              <Link
                to="/register"
                className="text-xs text-gray-500 uppercase  hover:underline"
              >
                or sign up
              </Link>

              <span className="w-1/5 border-b  md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
