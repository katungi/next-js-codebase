import { QueryClient, useQuery } from 'react-query';
import axios from 'axios';
// import {API} from '../config'
import CategoryCards from '../components/experienceCards/CategoryCards';
import ExperienceSkeleton from '../components/experienceCards/ExperienceSkeletons';

export default function Categories() {
  const getCategories = async () => {
    const { data } = await axios.get(
      `https://hostguest.herokuapp.com/api/categories`
    );
    return data;
  };
  const { data, isLoading } = useQuery('categories', getCategories);

  if (isLoading)
    return (
      <>
        <div className='px-4 py-2'>
          <div className='animate-pulse'>
            <ExperienceSkeleton type='long' />
          </div>
        </div>
        <div className='px-4 py-2'>
          <div
            className='animate-pulse'
            style={{
              animationFillMode: 'backwards',
              animationDelay: '150ms',
            }}
          >
            <ExperienceSkeleton type='short' />
          </div>
        </div>
        <div className='px-4 py-2'>
          <div
            className='animate-pulse'
            style={{
              animationFillMode: 'backwards',
              animationDelay: '300ms',
            }}
          >
            <ExperienceSkeleton type='long' />
          </div>
        </div>
      </>
    );

  return (
    <div className='flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-4 xl:-mx-5'>
      <div className='my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-3 md:px-3 md:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3'>
        {data?.map((category, id) => (
          <CategoryCards category={category} key={id} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('categories', () => getCategories());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
