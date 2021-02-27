import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import LatestExperinceCard from '../components/experienceCards/LatestExperienceCard';
import axios from 'axios';
import ExperienceSkeleton from '../components/experienceCards/ExperienceSkeletons';

const getExperiences = async () => {
  const { data } = await axios.get(
    `https://hostguest-backend.herokuapp.com/api/experiences`
  );
  return data;
};

export default function Latest() {
  const { data, isLoading } = useQuery('experiences', getExperiences);

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
    <>
      <div className=''>
        <h3 className='font-bold bold text-2xl lg:mb-2 mb-4 ml-6 leading-none text-pink-600'>
          Latest Experiences You might Like
        </h3>
        <section className=''>
          {data?.experiences?.map((experience, id) => (
            <LatestExperinceCard experience={experience} key={id} />
          ))}
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('experiences', () => getExperiences());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
