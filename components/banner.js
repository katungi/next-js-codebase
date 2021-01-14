import Link from "next/link";
// import Image from "next/image";
import { Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

export default function banner() {
  return (
    <>
      <section>
        <div className="relative bg-white mt-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                      Experience something new,{" "}
                    </span>
                    <span className="block text-pink-600 xl:inline">
                      Something amazing,{" "}
                    </span>
                    <span className="block xl:inline">With HostGuest</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Choose across our wide range of Experiences, and have all
                    the fun you can possibly have. Experiences are just a button
                    click away!
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <Link href="/experiences">
                      <Button
                        shape="round"
                        icon={<CalendarOutlined />}
                        size="large"
                        className="bg-pink-600 text-white hover:text-pink-500 hover:bg-white border-white"
                      >
                        Check out Experiences
                      </Button>
                    </Link>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.pexels.com/photos/1360255/pexels-photo-1360255.jpeg?cs=srgb&dl=pexels-thunyarat-klaiklang-1360255.jpg&fm=jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        mark {
          background-color: #f53398;
          color: white;
        }
      `}</style>
    </>
  );
}
