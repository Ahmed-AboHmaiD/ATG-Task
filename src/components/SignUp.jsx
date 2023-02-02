import React from "react";
import sign from "../assets/sign.png";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SignUp = ({ isLoggin, setIsLoggin }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 bg-black/60 w-full h-full z-40"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[780px] bg-white">
        <div className=" bg-green_1/10 text-green_1 py-2 px-6 font-bold">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
        <div className="py-6 container grid grid-cols-12 mx-auto gap-14">
          <div className=" col-span-6 mt-5">
            <div className="font-bold text-xl mb-5">Create Account</div>
            <div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-input bg-shareBg p-2 w-1/2 outline-none rounded-tl-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-input bg-shareBg p-2 w-1/2 outline-none rounded-tr-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Email"
                className="border border-input bg-shareBg p-2 w-full outline-none"
              />
              <input
                type="text"
                placeholder="Password"
                className="border border-input bg-shareBg p-2 w-full outline-none"
              />
              <input
                type="text"
                placeholder="Confirm Password"
                className="border border-input bg-shareBg p-2 w-full outline-none rounded-b-sm"
              />
            </div>
            <button className="rounded-full text-white bg-blue_1 w-full text-center py-2 mt-5">
              Create Account
            </button>
            <div className="mt-6">
              <button className="w-full border text-center mb-2 py-2 rounded-sm">
                <BsFacebook  className="inline-block mr-1 text-blue_1"/>
                Sign up with Facebook
              </button>
              <button className="w-full border text-center py-2 rounded-sm">
                <FcGoogle className="inline-block mr-1" /> Sign up with Google
              </button>
            </div>
          </div>
          <div className=" col-span-6 mt-5">
            <div className="text-gray_2 text-right ml-auto mb-11 text-sm font-medium">
              Already have an account?{" "}
              <span className="text-blue_1 cursor-pointer">Sign In</span>
            </div>
            <img src={sign} alt="signUp" className="max-w-full" />
            <div className=" text-gray_2 text-[10px] mt-7 text-left mr-auto">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
