import {useState} from 'react';
import { useRouter } from "next/router";
import style from '../styles/banner.module.css'
import Link from 'next/link'
import { Button } from '@material-ui/core'

export default function banner() {
  const router = useRouter();
  
  return (
    <div>
      <div className={style.banner}>
        <div className={style.banner__info}>
          <h1>Make KSH 100,000 hosting Experiences!!</h1>
          <h5>
            Choose an adventure and take a tour on our wide range of experiences.
          </h5>
          <Link href="../pages/experiences"><Button onClick={() => router.push('/experiences')}>Explore Experiences</Button></Link> <br/>
          <Link href="../pages/experiences"><Button onClick={() => router.push('/experiences')}>Become a Host!</Button></Link>
      </div>
      </div>
    </div>
  );
}
