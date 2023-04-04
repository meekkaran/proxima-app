/* eslint-disable react/jsx-no-undef */
import React from "react";
import Login from "../../components/authentication/SignIn";

function Signin() {
  return (
    <div className='bg-gray-100 dark:bg-zinc-800 transition-all duration-700 overflow-hidden scroll-smooth'>
      <main>
        <Login />
      </main>
    </div>
  );
}
export default Signin;
