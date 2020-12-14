import { useEffect, useState } from "react";
import axios from "axios";

export default function Cards({ experience }) {
  const [experienceData, setExperiences] = useState([]);
  const url = "http://localhost:3001/api/v1/meetups";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data.meetups);
        setExperiences(res.data.meetups[0]);
        console.log(experienceData);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div class="container max-w-full">
      <div class="block">
        <div class="flex flex-col md:flex-row md:max-w-4xl max-w-sm mx-auto bg-white border border-grey-500 my-5 shadow-2xl rounded-lg over-hidden">
          <div class="p-4 md:w-1/2">
            <img
              src={experienceData.image}
              alt=""
              class="bg-gray-100 sm:rounded-lg"
            />
          </div>
          <div class="p-4 md:w-1/2">
            <div class="h-full flex flex-col justify-between">
              <form class="flex-auto pl-6">
                <div class="flex flex-wrap items-baseline">
                  <h1 class="w-full flex-none font-semibold mb-2.5">
                    {experienceData.title}
                  </h1>
                  <div class="text-4xl leading-7 font-bold text-pink-600">
                    KSH {experienceData.joinedPeopleCount}00
                  </div>
                  <div class="text-sm font-medium text-gray-400 ml-3">
                    Available
                  </div>
                </div>
                <div class="flex items-baseline my-8">
                  <p class="text-sm text-gray-500">
                    {experienceData.shortInfo}
                  </p>
                </div>
                <div class="flex space-x-3 mb-4 text-sm font-semibold">
                  <div class="flex-auto flex space-x-3">
                    <button
                      class="w-1/2 flex items-center justify-center rounded-full bg-pink-700 text-white"
                      type="submit"
                    >
                      Join Experience
                    </button>
                    <button
                      class="w-1/2 flex items-center justify-center rounded-full bg-pink-50 text-pink-700"
                      type="button"
                    >
                      Add to Favorites
                    </button>
                  </div>

                  <button
                    class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-pink-50 text-pink-700"
                    type="button"
                    aria-label="like"
                  >
                    <svg width="20" height="20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
