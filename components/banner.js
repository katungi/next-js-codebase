import { useRouter } from "next/router";
import Link from "next/link"
import style from "../styles/banner.module.css";

export default function banner() {
  const router = useRouter();
  return (
    <>
      <div>
        <div className={style.banner}>
          <div className={style.banner__info}>
            <h1 className="text-5xl">
              Make <mark>KSH 100,000</mark> hosting Experiences!!
            </h1>
            <h5 className="text-white">
              <mark>Choose an adventure and take a tour on our wide range of
              experiences.</mark>
            </h5>
            <Link href="/createExperience"><a className="w-1/2 flex items-center justify-center rounded-lg bg-pink-700 text-white">Host an Experience!</a></Link>
            <br></br>
            <Link href="/experiences"><a className="w-1/2 flex items-center justify-center rounded-full bg-pink-700 text-white">Book an Experiences</a></Link>
            <br />
          </div>
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
