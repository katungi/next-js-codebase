import Link from 'next/link';

export default function LatestExperinceCard({ experience }) {
  return (
    <Link href='/experiences/[id]' as={`/experiences/${experience._id}`}>
      <div className='sm:mt-0 w-80 flex-shrink-0 mt-10 sm:ml-4 ml-4'>
        <div className='px-4 inline-flex sm:pt-2 sm:pb-8 xl:px-8'>
          <div className='ml-4 mt-10 w-80 flex-shrink-0'>
            <div>
              <div className='relative pb-5/6'>
                <Link
                  href='/experiences/[id]'
                  as={`/experiences/${experience._id}`}
                >
                  <img
                    src={experience.image}
                    alt=''
                    className='relative inset-0 h-full w-full rounded-lg shadow-md object-cover'
                  />
                </Link>
              </div>
              <div className='relative px-4 -mt-16'>
                <div className='bg-white rounded-lg px-4 py-4 shadow-lg'>
                  <div className='flex items-baseline'>
                    <span className='inline-block px-2 py-1 leading-none bg-pink-400 text-white rounded-full font-semibold tracking-wide text-xs'>
                      Available
                    </span>
                    <div className='ml-2 text-xs text-gray-600 font-semibold tracking-wide'>
                      Joined by • {experience.joinedPeopleCount} guests
                    </div>
                  </div>
                  <h4 className='mt-1 text-gray-900 font-semibold text-lg'>
                    {experience.title}
                  </h4>
                  <div className='mt-1'>
                    <span className='text-pink-600 font-bold bold'>
                      {experience.price}
                    </span>
                    <span className='ml-1 text-sm text-gray-600'></span>
                  </div>
                  <div className='mt-2 flex items-center text-sm text-gray-600'>
                    <Link
                      href='/experiences/[id]'
                      as={`/experiences/${experience._id}`}
                    >
                      <a className='py-2 px-5 bg-pink-500 rounded-lg text-xs text-white hover:bg-pink-300 transition duration-300 ease-in-out flex items-center animate-bounce'>
                        Check Out Experience{' '}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
