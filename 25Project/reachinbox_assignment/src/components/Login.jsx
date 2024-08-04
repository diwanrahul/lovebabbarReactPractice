import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token is present in the URL
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    if (token) {
      // Store the token in local storage or any other secure storage
      localStorage.setItem("authToken", token);

      // Redirect to the Onebox screen or any other authenticated route
      navigate("/onebox");
    }
  }, [navigate]);

  const handleLogin = () => {
    // Redirect to the Google login URL
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com";
  };

  return (
    <div
      className="login-page bg-[#212121] h-[40vh] w-2/6 rounded-xl border-2 border-slate-400 flex flex-col justify-evenly 
    sm:h-[60vh]"
    >
      <div className="flex flex-col justify-center items-center text-center gap-5 ">
        <h1 className="text-lg">Create a new accound</h1>
        <button
          onClick={handleLogin}
          className="items-center justify-center flex gap-2 border-2 border-slate-300 w-9/12 py-2 rounded-sm "
        >
          <span className="">
            <FcGoogle />
          </span>
          <p className="hidden sm:block">Sign Up with Google</p>
        </button>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-5  ">
        <button className="w-5/12 py-2 bg-gradient-to-r from-blue-400 to-blue-700 rounded-sm ">
          Create a Accound
        </button>
        <p className="text-slate-500">
          Already have an account?{" "}
          <Link to="/" className="text-slate-300">
            Sign In
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
