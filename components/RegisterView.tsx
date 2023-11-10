import Image from "next/image";
import React from "react";
import logo from "../public/images/logo.png";
import Link from "next/link";

export type RegisterProps = {
  email: string;
  fullName: string;
  userName: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  error: string;
};

const RegisterView = ({
  email,
  fullName,
  userName,
  password,
  setEmail,
  setFullName,
  setUserName,
  setPassword,
  handleSubmit,
  error,
}: RegisterProps) => {
  return (
    <>
      <div className="flex flex-col text-center mx-auto mt-3 max-w-sm px-12 pt-11 pb-10 border border-slate-300">
        <Image alt="about" src={logo} className="mx-auto w-44 mb-4" />
        <h2 className="font-bold text-gray-500 text-md mb-3">
          Sign up to see photos and videos from your friends.
        </h2>
        <button className="bg-blue-500 font-medium text-sm text-white p-2 rounded-lg">
          Log in with Facebook
        </button>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-screen h-px my-8 bg-gray-200 border-0 dark:bg-gray-300" />
          <span className="absolute px-3 font-medium text-sm text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-dark">
            OR
          </span>
        </div>
        <form>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="text"
            className="bg-gray-50 mb-2 w-full p-2 text-xs placeholder-gray-500 border border-slate-300 outline-transparent"
          />
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full name"
            type="text"
            className="bg-gray-50 mb-2 w-full p-2 text-xs placeholder-gray-500 border border-slate-300 outline-transparent"
          />
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            type="text"
            className="bg-gray-50 mb-2 w-full p-2 text-xs placeholder-gray-500  border border-slate-300 outline-transparent"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="bg-gray-50 mb-2 w-full p-2 text-xs placeholder-gray-500 border border-slate-300 outline-transparent"
          />
        </form>
        <p className="text-xs text-start text-red-500">{error}</p>
        <p className="text-xs my-4 text-gray-500">
          People who use our service may have uploaded your contact information
          to Instagram.{" "}
          <Link href="#" className="text-blue-900">
            Learn more
          </Link>
        </p>

        <p className="text-xs text-gray-500">
          By signing up, you agree to our{" "}
          <Link href="#" className="text-blue-900">
            Terms{" "}
          </Link>
          ,
          <Link href="#" className="text-blue-900">
            Privacy Policy{" "}
          </Link>
          ,and{" "}
          <Link href="#" className="text-blue-900">
            Cookies Policy
          </Link>
        </p>
        <button
          disabled={
            email === "" ||
            fullName === "" ||
            userName === "" ||
            password === ""
          }
          onClick={handleSubmit}
          className={`font-medium text-sm text-white p-1.5 rounded-lg mt-4 ${
            email === "" ||
            fullName === "" ||
            userName === "" ||
            password === ""
              ? "bg-blue-300"
              : "bg-blue-500"
          }`}
        >
          Sign Up
        </button>
      </div>
      <div className="text-center max-w-sm mx-auto my-2 text-sm p-6 border border-slate-300">
        Have an account?
        <Link href="/login" className="text-blue-400">
          {" "}
          Log in
        </Link>
      </div>
    </>
  );
};

export default RegisterView;
