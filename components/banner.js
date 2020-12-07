import {useState} from 'react';
import { Button } from "@material-ui/core";
import Search from './search'
import { useRouter } from "next/router";
import style from '../styles/banner.module.css'

export default function banner() {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <div className={style.banner}>
        <div className={style.banner__search}>
          {showSearch && <Search />}
          <Button 
            variant="outlined"
            className="banner__searchButton"
            onClick={() => setShowSearch(!showSearch)}
          >
            {showSearch ? "hide" : "search Dates"}
          </Button>
        </div>
        <div className={style.banner__info}>
          <h1>Make KSH 100,000 hosting Experiences!!</h1>
          <h5>
            Choose an adventure and take a tour on our wide range of experiences.
          </h5>
          <Button onClick={() => router.push("/search")} variant="outlined">
            Explore Nearby
          </Button>
      </div>
      </div>
    </div>
  );
}
