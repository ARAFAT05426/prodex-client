/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/providers/useAuth";
import PrimaryBtn from "../../componets/common/buttons/primaryBtn/primaryBtn";
import { useDevelopmentNotice } from "../../hooks/providers/useDevelopmentNotice";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const { user, signup, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const { showNotice } = useDevelopmentNotice();
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Redirect to homepage if the user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      console.error("All fields are required");
      return;
    }
    try {
      await signup(email, password);
      console.log("beforeUpdate:", user);
      await updateUserProfile({ displayName: name });
      navigate("/dashboard");
      e.target.reset();
    } catch (error) {
      console.error("An error occurred during registration:", error.message);
    }
  };

  return (
    <div className="h-screen flex">
      {/* Background image section */}
      <div
        className="relative hidden md:block w-1/2 lg:w-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url('/signup-bg.png')` }}
      >
        <div className="h-full w-full bg-black/25 backdrop-blur-sm absolute inset-0" />
      </div>

      {/* Signup form section */}
      <div className="px-5 md:px-0 w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center">
        <div className="w-full max-w-xl mx-auto font-montserrat">
          <Link
            to={"/"}
            className="text-4xl md:text-5xl lg:text-7xl font-medium"
          >
            <span className="-ml-2">Welcome</span> <br />
            <span className="font-extrabold">Join Us!</span>
          </Link>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full mt-3"
          >
            <label htmlFor="name" className="">
              <span className="font-semibold">Name:</span>
              <input
                className="px-3 py-2 text-sm font-semibold border rounded-sm w-full outline-none text-gray-800"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </label>
            <label htmlFor="email" className="">
              <span className="font-semibold">Email:</span>
              <input
                className="px-3 py-2 text-sm font-semibold border rounded-sm w-full outline-none text-gray-800"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </label>
            <label htmlFor="password" className="relative">
              <span className="font-semibold">Password:</span>
              <input
                className="px-3 py-2 text-sm font-semibold border rounded-sm w-full outline-none text-gray-800"
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-2 top-9"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </label>
            <PrimaryBtn type="submit" className="bg-black text-white">
              Sign Up
            </PrimaryBtn>
          </form>
          <div className="flex items-center gap-3 text-gray-500 font-bold my-3">
            <hr className="w-full" />
            or
            <hr className="w-full" />
          </div>
          {/* Social sign-up buttons */}
          <button
            onClick={showNotice}
            className="w-full flex items-center justify-center font-semibold bg-white text-gray-800 border py-2 px-4 rounded shadow-sm"
          >
            <FcGoogle className="text-3xl mr-3" />
            Sign in with Google
          </button>
          {/* Login link */}
          <p className="mt-6 text-center text-xs">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-400 hover:text-blue-600"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
