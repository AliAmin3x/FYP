import React from 'react';

const DeveloperLogin = () => {

  window.location.href = "/dashboard";


  return (
    <section className="bg-signInBackground dark:bg-signInBackgroundDark">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.3/dist/tailwind.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
      </head>
      <style>
        {`
          .logInCard {
            background-color: #303030;
            color: #f5f5f5; /* Adjust text color for better contrast */
          }
          .logInInput::placeholder {
            color: #D1D5DB; /* Dull white color for placeholder */
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-custom-gray">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-primary">
          <img className="w-8 h-8 mr-2" src="https://images.squarespace-cdn.com/content/v1/5cf8130805d9b0000136bfff/1564690241772-WNZBV9YZE64SOOX04EUN/nalogo-white.png?format=1500w" alt="logo"/>
          <span className="text-white">NexGen Arcade</span>
        </a>

        <div className="w-full bg-white rounded-lg shadow logInCard  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-primary  md:text-2xl">
              Login to your Developer's Portal
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary ">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="logInInput bg-transparent border border-custom-purple text-white sm:text-sm rounded-lg block w-full p-2.5 focus:border-#71319f"
                  placeholder="Enter Your Email"
                  required=""
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-primary dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="logInInput bg-transparent border border-custom-purple text-white sm:text-sm rounded-lg block w-full p-2.5 focus:border-#71319f"
                  placeholder="Enter Your Password"
                  required=""
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-white" required=""/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-white ">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-purple-700 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-36 h-10 bg-purple-700 text-white hover:bg-purple-900 focus:ring-2 focus:ring-purple-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300 ease-in-out"
                >
                  Confirm
                </button>
              </div>

              <p className="text-sm font-light text-white">
                Don’t have an account yet? <a href="/signup" className="font-medium text-purple-700 hover:underline dark:text-primary-500">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeveloperLogin;
