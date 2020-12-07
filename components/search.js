import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import styles from '../styles/search.module.css'

export default function search() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
    color: "#f53398",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-3 md:px-3 md:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
      <div className={styles.search}>
        <DateRangePicker ranges={[selectRange]} onChange={handleSelect} />
        <h2>
          Number of Guests <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type="number" />
        <Button onClick={() => router.push("/search")}>Search HostGuest</Button>
      </div>
    </div>
  );
}
