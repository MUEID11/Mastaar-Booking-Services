import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "./../../assets/login.svg";
import logo from "../../../public/vite.png";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Helmet } from "react-helmet";
import axios from "axios";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, setUser, signInWithGoogle, updateUser } = useAuth();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );
      toast.success("Sign in successfull");
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one special character and one uppercase letter."
      );
      return;
    }
    try {
      const result = await createUser(email, password);
      await updateUser(name, photo);
      setUser({ ...result?.user, photoURL: photo, displayName: name });
      console.log(result);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );

      navigate(location?.state ? location?.state : "/");
      toast.success("Registration successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-[calc(100vh-260px)]">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg  lg:max-w-4xl my-4">
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
            </div>

            <p className="mt-3 text-xl text-center text-gray-600 ">
              Register to explore more features!
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
                or Registration with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="name"
                >
                  Username
                </label>
                <input
                  required
                  id="name"
                  autoComplete="name"
                  name="name"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="photo"
                >
                  Photo URL
                </label>
                <input
                  required
                  id="photo"
                  autoComplete="photo"
                  name="photo"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  required
                  id="LoggingEmailAddress"
                  autoComplete="email"
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    // onChange={(e) => validatePassword(e.target.value)}
                    placeholder="password"
                    name="password"
                    id="password"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    required
                  />
                  <div>
                    {showPass ? (
                      <BiShow
                        onClick={() => setShowPass(false)}
                        className="text-2xl absolute top-3 right-2"
                      />
                    ) : (
                      <BiHide
                        onClick={() => setShowPass(true)}
                        className="text-2xl absolute top-3 right-2"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-blue-50 capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  md:w-1/4"></span>

              <Link
                to="/login"
                className="text-xs text-gray-500 uppercase  hover:underline"
              >
                or sign in
              </Link>

              <span className="w-1/5 border-b  md:w-1/4"></span>
            </div>
          </div>
          <div
            className="hidden bg-cover bg-center lg:block lg:w-1/2"
            style={{
              backgroundImage: `url(${login})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
