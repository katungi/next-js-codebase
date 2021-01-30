import router from "next/router";
import Link from "next/link";

export default function Cards({ experience }) {
  return (
    <div className="container max-w-full">
      <div className="block">
        <Link href="/experiences/[id]" as={`/experiences/${experience._id}`}>
          <div className="flex flex-col md:flex-row md:max-w-4xl max-w-sm mx-auto bg-white border border-grey-500 my-5 shadow-2xl rounded-lg over-hidden">
            <div className="p-4 md:w-1/2">
              <Link
                href="/experiences/[id]"
                as={`/experiences/${experience._id}`}
              >
                <img
                  src={experience.image}
                  alt=""
                  className="bg-gray-100 sm:rounded-lg"
                />
              </Link>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="h-full flex flex-col justify-between">
                <form className="flex-auto pl-6">
                  <div className="flex flex-wrap items-baseline">
                    <h1 className="w-full flex-none font-semibold mb-2.5">
                      {experience.title}
                    </h1>
                    <div className="text-4xl leading-7 font-bold text-pink-600">
                      KSH {experience.joinedPeopleCount}00
                    </div>
                    <div className="text-sm font-medium text-gray-400 ml-3">
                      Available
                    </div>
                  </div>
                  <div className="flex items-baseline my-8">
                    <p className="text-sm text-gray-500">
                      {experience.shortInfo}
                    </p>
                  </div>
                  <div className="flex space-x-3 mb-4 text-sm font-semibold">
                    <div className="flex-auto flex space-x-3">
                      <Link
                        href="/experiences/[id]"
                        as={`/experiences/${experience._id}`}
                      >
                        <button className="w-1/2 flex items-center justify-center rounded-full bg-pink-700 text-white">
                          check it Out
                        </button>
                      </Link>
                    </div>
                    <button
                      className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-pink-50 text-pink-700"
                      type="button"
                      aria-label="like"
                    >
                      <svg width="20" height="20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
