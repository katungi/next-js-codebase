import ErrorPage from "next/error";
import fetch from "node-fetch";
import {Button} from 'antd'
import { CalendarOutlined } from "@ant-design/icons";

export default function Post({ data }) {
  if (!data) {
    return <ErrorPage statusCode={404}></ErrorPage>;
  }
  return (
    <>
      <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
        <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
          <p class="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">
            {data.shortInfo}
          </p>
          <h2 class="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
            {data.title}
          </h2>
        </div>
        <div class="col-start-1 row-start-2 px-4 sm:pb-16">
          <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="text-violet-600"
            >
              <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
            </svg>
            <div class="ml-1">
              <span class="text-black">4.94</span>
              <span class="sm:hidden md:inline">(128)</span>
            </div>
            <div class="text-base font-normal mx-2">·</div>
            <div>{data.location}</div>
          </div>
          <hr class="w-16 border-gray-300 hidden sm:block"/>
        </div>
       
          <div class="col-start-1 row-start-3 space-y-3 px-4">
            <p class="flex items-center text-black text-sm font-medium">
              <img
                src={data.experienceCreator.image}
                alt=""
                class="w-6 h-6 rounded-full mr-2 bg-gray-100"
              ></img>
              Hosted by {data.experienceCreator.name}
            </p>
          </div>
          <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
            <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
              <div class="relative col-span-3 row-span-2 md:col-span-2">
                <img
                  src={data.image}
                  alt=""
                  class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
                />
              </div>
              <div class="relative hidden md:block">
                <img
                  src={data.image}
                  alt=""
                  class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                />
              </div>
              <div class="relative hidden md:block">
                <img
                  src={data.image}
                  alt=""
                  class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>
          <div>

          <Button
            type="primary"
              shape="round"
              icon={<CalendarOutlined />}
              size="large"
              style={{ background: "#f53398", borderColor: "white" }}
            >
              BOOK
            </Button>
          </div>
        </div>
         <style jsx>{`
         mark {
           background-color: #f53398;
           color: white;
         }
       `}</style>
       </>
  );
}

export async function getServerSideProps({ params, res }) {
  try {
    const { id } = params;

    const result = await fetch(`http://localhost:8000/api/experiences/${id}`);

    const data = await result.json();
    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
}
