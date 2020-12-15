import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import ExperienceCards from "../components/experienceCards/ExperienceCards";
import Footer from "../components/footer";
import { Divider } from "@material-ui/core";
import axios from 'axios';
    
const getExperiences =async  ()=>{
  const { data } = await axios.get('http://localhost:3001/api/v1/meetups') 
  return data
}

export default function experiences({ experiences }) {
  const {data, isLoading}= useQuery('experiences', getExperiences)

   if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1 className="text-4xl mx-4 font-extrabold text-pink-600 uppercase">
        Experiences
      </h1>
      <br />
      {data?.meetups?.map((experience, id) => (
        <ExperienceCards experience={experience} key={id}/>
      ))}
      <Divider />
      <Footer />
    </div>
  );
}


export async function getServerSideProps(){
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('experiences', () => getExperiences())

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}