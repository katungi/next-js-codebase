import { useState } from "react";
import Link from "next/link";
import { Avatar } from "antd";
import { isAuth } from "../Hooks/auth";

export default function header() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <header className="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0 bg-white">
        <div>
          <Link href="/">
            <img
              className="h-8"
              src="/images/hostguest-logo.png"
              alt="hostguest"
            />
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white"
            onClick={handleClick}
          >
            {toggle == false ? (
              <svg viewBox="0 0 10 8" width="30">
                <path
                  d="M1 1h8M1 4h 8M1 7h8"
                  stroke="#f53398"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30"
                height="20"
                overflow="visible"
                stroke="#f53398"
                strokeWidth="5"
                strokeLinecap="round"
              >
                <line x1="0" y1="0" x2="50" y2="50" />
                <line x1="50" y1="0" x2="0" y2="50" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } px-2 pt-2 pb-4 sm:flex sm:p-0`}
      >
        <Link href="/createExperience">
          <a
            href=""
            className="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-pink-200 hover:text-white"
          >
            Host an Experience
          </a>
        </Link>
        <Link href="/categories">
          <a
            href=""
            className="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-pink-200 hover:text-white sm:ml-2"
          >
            Categories
          </a>
        </Link>

        {!isAuth() ? (
          <>
            <Link href="/signup">
              <a
                href=""
                className="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-pink-200 hover:text-white sm:ml-2"
              >
                Sign Up
              </a>
            </Link>
            <Link href="/signin">
              <a
                href=""
                className="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-pink-200 hover:text-white sm:ml-2"
              >
                Sign In
              </a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <a className="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-pink-200 hover:text-white sm:ml-2">
                {isAuth().name}
              </a>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
