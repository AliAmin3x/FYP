import React, { useState } from "react";
import { auth } from "../../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        username
      );
      console.log(response);
      console.log("Account Created");
      window.location.href = "/home";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-signInBackground dark:bg-signInBackgroundDark">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.3/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <style>
        {`
          .signInCard {
            background-color: #303030;
            color: #f5f5f5; /* Adjust text color for better contrast */
          }
          .signInInput::placeholder {
            color: #999999; /* Adjust placeholder text color for better visibility */
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-custom-gray">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-primary dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://images.squarespace-cdn.com/content/v1/5cf8130805d9b0000136bfff/1564690241772-WNZBV9YZE64SOOX04EUN/nalogo-white.png?format=1500w"
            alt="logo"
          />
          <span className="text-white">NexGen Arcade</span>
        </a>
        <div className="w-full bg-white rounded-lg shadow signInCard dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-primary dark:text-white md:text-2xl">
              Register an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-primary dark:text-white"
                >
                  Enter Username
                </label>
                <input
                  type="text"
                  name="Username"
                  id="Username"
                  className="signInInput bg-transparent border border-custom-purple text-white sm:text-sm rounded-lg block w-full p-2.5 focus:border-#71319f"
                  placeholder="Enter Your Username"
                  required=""
                />{" "}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-primary dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="signInInput bg-transparent border border-custom-purple text-white sm:text-sm rounded-lg block w-full p-2.5 focus:border-#71319f"
                  placeholder="Enter Your Email"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-primary dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="signInInput bg-transparent border border-custom-purple text-white sm:text-sm rounded-lg block w-full p-2.5 focus:border-#71319f"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-primary dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="signInInput bg-transparent border border-custom-purple text-white sm:text-sm rounded-lg block w-full p-2.5 focus:border-#71319f"
                  required=""
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center">
                {/* Error message */}
                {error && <p className="text-red-500">{error}</p>}
                <button
                  type="submit"
                  className="w-36 h-10 bg-cosmicpurple text-white hover:bg-purple2 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300 ease-in-out"
                >
                  Register
                </button>
              </div>
              <p className="text-sm font-light text-white">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-cosmicpurple hover:underline dark:text-primary-500"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
