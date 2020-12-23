import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import categoryCards from '../components/experienceCards/CategoryCards';
import ExperienceSkeleton from '../components/experienceCards/ExperienceSkeletons'
export default function Categories() {

  const getCategories = async () => {
    const { data } = await axios.get("http://localhost:3001/api/v1/categories");
    return data;
  };
  const { data, isLoading } = useQuery("categories", getCategories);

  if (isLoading)
    return (
      <>
        <div className="px-4 py-2">
          <div className="animate-pulse">
            <ExperienceSkeleton type="long" />
          </div>
        </div>
        <div className="px-4 py-2">
          <div
            className="animate-pulse"
            style={{
              animationFillMode: "backwards",
              animationDelay: "150ms",
            }}
          >
            <ExperienceSkeleton type="short" />
          </div>
        </div>
        <div className="px-4 py-2">
          <div
            className="animate-pulse"
            style={{
              animationFillMode: "backwards",
              animationDelay: "300ms",
            }}
          >
            <ExperienceSkeleton type="long" />
          </div>
        </div>
      </>
    ); 
  
  return (
   <>
    {data?.map((category, id) => (
      <categoryCards ecategory={category} key={id}/>
    ))}
   </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("categories", () => getCategories());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
