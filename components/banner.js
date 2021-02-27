import Link from 'next/link';

export default function banner() {
  return (
    <>
      <section className='h-screen'>
        <div className='relative bg-white'>
          <div className='max-w-7xl'>
            <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
              <main className='mt-10 mx-auto max-w-5xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-8 lg:px-8 xl:mt-15'>
                <div className='sm:text-center lg:text-left'>
                  <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                    <span className='block xl:inline'>
                      Experience something new,{' '}
                    </span>
                    <span className='block text-pink-600 xl:inline'>
                      Something amazing,{' '}
                    </span>
                    <span className='block xl:inline'>With HostGuest</span>
                  </h1>
                  <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                    Choose across our wide range of Experiences, and have all
                    the fun you can possibly have. Experiences are just a button
                    click away!
                  </p>
                  <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                    <Link href='/experiences'>
                      <a className='py-2 px-4 bg-pink-500 rounded-full text-md text-white hover:bg-pink-300 transition duration-300 ease-in-out flex items-center animate-bounce'>
                        Check Out Experiences{' '}
                      </a>
                    </Link>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <img
              className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
              src='https://images.pexels.com/photos/1360255/pexels-photo-1360255.jpeg?cs=srgb&dl=pexels-thunyarat-klaiklang-1360255.jpg&fm=jpg'
              alt=''
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        mark {
          background-color: #f53398;
          color: white;
        }
      `}</style>
    </>
  );
}
