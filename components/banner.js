import { useState } from "react";
import { useRouter } from "next/router";
import style from "../styles/banner.module.css";
import Link from "next/link";
import { Button } from "@material-ui/core";

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
            <h5>
              Choose an adventure and take a tour on our wide range of
              experiences.
            </h5>
            <Button onClick={() => router.push("/categories")}>
              Host an Experience!
            </Button>
            <br />
            <Button onClick={() => router.push("/experiences")}>
              Book an Experiences
            </Button>
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
