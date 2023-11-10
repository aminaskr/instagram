import Link from "next/link";
import "tailwindcss/tailwind.css";
import Image from "next/image";

interface LoginViewProps {
  emailAddress: string;
  password: string;
  isInvalid: boolean;
  handleLogin: (e: any) => void;
  setEmailAddress: (email: string) => void;
  setPassword: (password: string) => void;
  error: string;
}
const LoginView: React.FC<LoginViewProps> = ({
  emailAddress,
  password,
  isInvalid,
  handleLogin,
  setEmailAddress,
  setPassword,
  error,
}) => {
  return (
    <div className="flex mx-auto max-w-screen-md items-center justify-center md:justify-start h-screen">
      <div className="flex w-3/5 mr-20 hidden md:block">
        <Image
          alt="iPhone with Instagram app"
          src="/images/img1.jpeg"
          width={370}
          height={370}
          layout="responsive"
          className="mx-auto mb-4"
        />
      </div>
      <div className="h-screen  flex flex-col justify-center items-center">
        <div className="bg-white rounded border border-gray-300 w-96 md:w-80 md:h-80  py-8 flex items-center flex-col mb-3">
          <h1 className="bg-no-repeat instagram-logo">
            <Image
              alt=" Instagram "
              src="/images/img2.jpeg"
              width={175}
              height={51}
              layout="fixed"
              className="mx-auto mb-4"
            />
          </h1>

          {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

          <form className="mt-3 w-64 flex flex-col">
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              onClick={handleLogin}
              className={`bg-blue-500 font-medium text-sm text-white w-full rounded h-8 font-bold ${
                isInvalid ? "bg-blue-300" : ""
              }`}
            >
              Log in
            </button>
          </form>
          <div className="flex justify-evenly space-x-2 w-64 mt-4">
            <div className="bg-gray-300 h-px flex-grow t-2 relative top-2"></div>
            <div className="flex-none uppercase text-xs text-gray-400 font-semibold">
              or
            </div>
            <div className="bg-gray-300 h-px flex-grow t-2 relative top-2"></div>
          </div>
          <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
            Forgot password?
          </a>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-300">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link
              className="text-blue-500 text-sm font-semibold"
              href="/signup"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
