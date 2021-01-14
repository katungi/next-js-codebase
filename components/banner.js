import Router from "next/router";
import { Button } from "antd";
import { CalendarOutlined, RocketOutlined } from "@ant-design/icons";
import style from "../styles/banner.module.css";

export default function banner() {
  return (
    <>
      <div className={style.banner}>
        <div className={style.banner__info}>
          <h1 className="text-5xl">
            Make <mark>KSH 100,000</mark> hosting Experiences!!
          </h1>
          <h5 className="text-white">
            Choose an adventure and take a tour on our wide range of
            experiences.
          </h5>
          {/* <Link href="/createExperience"><a className="w-1/2 flex items-center justify-center rounded-lg bg-pink-700 text-white">Host an Experience!</a></Link> */}
          <Button
            style={{ background: "#f53398", borderColor: "white" }}
            shape="round"
            icon={<RocketOutlined />}
            size="large"
            onClick={() => Router.push("/createExperience")}
          >
            Host an Experience
          </Button>
          <br></br>
          {/* <Link href="/experiences"><a className="w-1/2 flex items-center justify-center rounded-full bg-pink-700 text-white">Book an Experiences</a></Link> */}
          <Button
            style={{ background: "#f53398", borderColor: "white" }}
            shape="round"
            icon={<CalendarOutlined />}
            size="large"
            onClick={() => Router.push("/experiences")}
          >
            Book an experience
          </Button>
          <br />
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
