import { useState } from "react";
import Link from "next/link";

export default function header() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <header class="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0 bg-white">
        <div>
          <Link href="/">
            <img class="h-8" src="/images/hostguest-logo.png" alt="hostguest" />
          </Link>
        </div>
        <div class="sm:hidden">
          <button
            type="button"
            class="block text-gray-500 hover:text-white"
            onClick={handleClick}
          >
            {toggle == false ? (
              <svg viewBox="0 0 10 8" width="30">
                <path
                  d="M1 1h8M1 4h 8M1 7h8"
                  stroke="#f53398"
                  stroke-width="1"
                  stroke-linecap="round"
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
                stroke-width="5"
                stroke-linecap="round"
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
        <a
          href=""
          class="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-pink-200 hover:text-white"
        >
          Become Host
        </a>
        <a
          href=""
          class="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-pink-200 hover:text-white sm:ml-2"
        >
          Categories
        </a>
        <a
          href=""
          class="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-pink-200 hover:text-white sm:ml-2"
        >
          Sign Up
        </a>
        <Link href="/signin">
          <a
            href=""
            class="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-pink-200 hover:text-white sm:ml-2"
          >
            Sign In
          </a>
        </Link>
        <a
          href=""
          class="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-pink-200 hover:text-white sm:ml-2"
        >
          Daniel Dennis
        </a>
      </div>
    </header>
  );
}
