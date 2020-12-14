import { useEffect, useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryCache,
  QueryCache,
  ReactQueryCacheProvider,
} from "react-query";
import ExperienceCards from "../components/experienceCards/ExperienceCards";
import Footer from "../components/footer";
import { Divider } from "@material-ui/core";
import { useAxiosGet } from "../Hooks/HttpRequests";
import ExperienceList from "../components/experiences";
import axios from 'axios';
const queryCache = new QueryCache();

export default function experiences({ experiences }) {

  const [experienceData, setExperienceData] = useState([]);

  return (
    <div>
      <h1 className="text-4xl mx-4 font-extrabold text-pink-600 uppercase">
        Experiences
      </h1>
      <br />
      <Divider />
      <ExperienceList>
      <ExperienceCards/>
      <ExperienceCards/>
      <ExperienceCards/>
      <ExperienceCards/>
      </ExperienceList>
      <Footer />
    </div>
  );
}
