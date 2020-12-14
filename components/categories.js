import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
export default function Categories() {
  const [categories, setCategories] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/categories").then().catch();
  }, []);
  return (
    <div className="flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-4 xl:-mx-5">
      <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-3 md:px-3 md:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
      </div>

      <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-3 md:px-3 md:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
      </div>

      <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-3 md:px-3 md:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
    </div>
  );
}
