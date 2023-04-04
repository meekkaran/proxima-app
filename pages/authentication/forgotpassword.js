import React from "react";
import SignUp from "../../components/authentication/Signup";
import ForgotPassword from "../../components/authentication/ForgotPassword";

function Forgotpassword() {
  return (
    <div className='bg-gray-100 dark:bg-zinc-800 transition-all duration-700 overflow-hidden scroll-smooth'>
      <main>
        <ForgotPassword />
      </main>
    </div>
  );
}
export default Forgotpassword;
