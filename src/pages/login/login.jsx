/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/providers/useAuth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import PrimaryBtn from "../../componets/common/buttons/primaryBtn/primaryBtn";
import { useDevelopmentNotice } from "../../hooks/providers/useDevelopmentNotice";

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const { showNotice } = useDevelopmentNotice();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    if (!email.value || !password.value) {
      console.error("All fields are required");
      return;
    }

    try {
      await login(email.value, password.value);
      navigate("/dashboard");
      e.target.reset();
      console.log("User logged in successfully");
    } catch (error) {
      console.error("An error occurred during login:", error.message);
    }
  };

  return (
    <div className="h-screen flex">
      <div
        className="relative hidden md:block w-1/2 lg:w-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url('/login-bg.png')` }}
      >
        <div className="h-full w-full bg-black/25 backdrop-blur-sm absolute inset-0" />
      </div>

      <div className="w-full md:w-1/2 lg:w-2/5 px-4 flex flex-col justify-center">
        <div className="w-full max-w-lg mx-auto font-montserrat">
          <Link to="/" className="text-4xl md:text-5xl lg:text-7xl font-medium">
            <span className="-ml-2">Hello</span> <br />
            <span className="font-extrabold">Welcome!</span>
          </Link>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
            <label htmlFor="email">
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
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 inset-y-9 cursor-pointer"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </label>
            <PrimaryBtn type="submit" className="bg-black text-white">
              Login
            </PrimaryBtn>
          </form>
          <div className="flex items-center gap-3 text-gray-500 font-bold my-4">
            <hr className="w-full" />
            or
            <hr className="w-full" />
          </div>
          <button
            onClick={showNotice}
            className="w-full flex items-center justify-center font-semibold bg-white text-gray-800 border py-2 px-4 rounded shadow-sm"
          >
            <FcGoogle className="text-3xl mr-3" />
            Sign in with Google
          </button>
          <p className="mt-6 text-center text-xs">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-blue-300 hover:text-blue-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
