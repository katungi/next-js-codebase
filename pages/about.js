import { GoPencil, GoPerson } from 'react-icons/go';
import {
  AiFillDollarCircle,
  AiFillDashboard,
  AiFillSchedule,
  AiFillBulb,
  AiFillSafetyCertificate,
  AiOutlineHourglass,
  AiOutlineNotification,
  AiOutlineHighlight,
} from 'react-icons/ai';
import Footer from '../components/footer';

export default function About() {
  return (
    <>
      <div className='text-gray-800 antialiased'>
        <main>
          <div className='relative pt-16 pb-32 flex content-center items-center justify-center mainHeight'>
            <div className='absolute top-0 w-full h-full bg-center bg-cover imageClass'>
              <span
                id='blackOverlay'
                className='w-full h-full absolute opacity-75 bg-black'
              ></span>
            </div>
            <div className='container relative mx-auto'>
              <div className='items-center flex flex-wrap'>
                <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
                  <div className='pr-12'>
                    <h1 className='text-white font-semibold text-5xl'>
                      Hello! Welcome to Hostguest. So glad you're here.
                    </h1>
                    <p className='mt-4 text-lg text-gray-300'>
                      You know how lots of companies are big and faceless and,
                      if you'll pardon a pun, bureaucratic? Well that ain't us.
                      We're small and we care and we're here to help you find
                      unique and awesome experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden transformer1'>
              <svg
                className='absolute bottom-0 overflow-hidden'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='text-gray-300 fill-current'
                  points='2560 0 2560 100 0 100'
                ></polygon>
              </svg>
            </div>
          </div>
          <section className='pb-20 bg-gray-300 -mt-24'>
            <div className='container mx-auto px-4'>
              <div className='flex flex-wrap'>
                <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
                  <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400'>
                        <GoPerson />
                      </div>
                      <h6 className='text-xl font-semibold'>
                        Register and get approved
                      </h6>
                      <p className='mt-2 mb-4 text-gray-600'>
                        Becoming a Host is really easy. Register, get approved
                        and START MAKING MONEY
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-4/12 px-4 text-center'>
                  <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                        <GoPencil />
                      </div>
                      <h6 className='text-xl font-semibold'>
                        Create and Impress
                      </h6>
                      <p className='mt-2 mb-4 text-gray-600'>
                        Anything you do can be an experience, a cooking class,
                        decathlon, We mean ANYTHING!
                      </p>
                    </div>
                  </div>
                </div>
                <div className='pt-6 w-full md:w-4/12 px-4 text-center'>
                  <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400'>
                        <AiFillDollarCircle />
                      </div>
                      <h6 className='text-xl font-semibold'>Make Money</h6>
                      <p className='mt-2 mb-4 text-gray-600'>
                        Once you have an idea, start the hosting process and we
                        will be with you through it all. Till you get your BUCKS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap items-center mt-32'>
                <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
                  <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100'>
                    <AiFillDashboard />
                  </div>
                  <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                    Our Mission
                  </h3>
                  <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
                    We envision a world of personalized experiences designed to
                    be memorable, entertaining and immersive.
                  </p>
                  <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700'>
                    Our mission is to aggregate one-of-a-kinnd experiences not
                    found anywhere else on the internet. Smelling Farts, Behinds
                    and Rabbits since 2001 (subtitle) We do all the grunt work
                    and leave all the fun stuff for you to enjoy.
                  </p>
                </div>
                <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
                  <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600'>
                    <img
                      alt='...'
                      src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80'
                      className='w-full align-middle rounded-t-lg'
                    />
                    <blockquote className='relative p-8 mb-4'>
                      <svg
                        preserveAspectRatio='none'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 583 95'
                        className='absolute left-0 w-full block svg1'
                      >
                        <polygon
                          points='-30,95 583,95 583,65'
                          className='text-pink-600 fill-current'
                        ></polygon>
                      </svg>
                      <h4 className='text-xl font-bold text-white'>
                        Our Vision
                      </h4>
                      <p className='text-md font-light mt-2 text-white'>
                        Our team of experience scientists will make sure to
                        refine your ideas and even build on them, for the best
                        experience ever!
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='relative py-20'>
            <div className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 transformer2'>
              <svg
                className='absolute bottom-0 overflow-hidden'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='text-white fill-current'
                  points='2560 0 2560 100 0 100'
                ></polygon>
              </svg>
            </div>
            <div className='container mx-auto px-4'>
              <div className='items-center flex flex-wrap'>
                <div className='w-full md:w-4/12 ml-auto mr-auto px-4'>
                  <img
                    alt='...'
                    className='max-w-full rounded-lg shadow-lg'
                    src='https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80'
                  />
                </div>
                <div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
                  <div className='md:pr-12'>
                    <div className='text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300'>
                      <AiOutlineHighlight />
                    </div>
                    <h3 className='text-3xl font-semibold'>
                      A few necessities before you Host
                    </h3>
                    <p className='mt-4 text-lg leading-relaxed text-gray-600'>
                      Hosting an experience with us will make you make money you
                      can depend on.
                    </p>
                    <ul className='list-none mt-6'>
                      <li className='py-2'>
                        <div className='flex items-center'>
                          <div>
                            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                              <AiOutlineHourglass />
                            </span>
                          </div>
                          <div>
                            <h4 className='text-gray-600'>
                              Meet the minimum age to host an experience (18+)
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className='py-2'>
                        <div className='flex items-center'>
                          <div>
                            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                              <AiFillSafetyCertificate />
                            </span>
                          </div>
                          <div>
                            <h4 className='text-gray-600'>
                              Clear a background check.
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className='py-2'>
                        <div className='flex items-center'>
                          <div>
                            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                              <AiOutlineNotification />
                            </span>
                          </div>
                          <div>
                            <h4 className='text-gray-600'>
                              A skill, hobby or talent to design your experience
                              around.
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='pb-20 relative block bg-gray-900'>
            <div className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 transformer2'>
              <svg
                className='absolute bottom-0 overflow-hidden'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='text-gray-900 fill-current'
                  points='2560 0 2560 100 0 100'
                ></polygon>
              </svg>
            </div>
            <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
              <div className='flex flex-wrap text-center justify-center'>
                <div className='w-full lg:w-6/12 px-4'>
                  <h2 className='text-4xl font-semibold text-white'>
                    HOST AN EXPERIENCE
                  </h2>
                  <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-500'>
                    Make up to Ksh.105,000 a month doing what you love.
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap mt-12 justify-center'>
                <div className='w-full lg:w-3/12 px-4 text-center'>
                  <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                    <AiFillSafetyCertificate />
                  </div>
                  <h6 className='text-xl mt-5 font-semibold text-white'>
                    Register to be a Host
                  </h6>
                  <p className='mt-2 mb-4 text-gray-500'>
                    Becoming a Host is really easy. Register, get approved and
                    START MAKING MONEY
                  </p>
                </div>
                <div className='w-full lg:w-3/12 px-4 text-center'>
                  <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                    <AiFillBulb />
                  </div>
                  <h5 className='text-xl mt-5 font-semibold text-white'>
                    Think of an Idea
                  </h5>
                  <p className='mt-2 mb-4 text-gray-500'>
                    Anything you do can be an experience, a cooking class,
                    decathlon, We mean ANYTHING!
                  </p>
                </div>
                <div className='w-full lg:w-3/12 px-4 text-center'>
                  <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                    <AiFillSchedule />
                  </div>
                  <h5 className='text-xl mt-5 font-semibold text-white'>
                    Host the Experience
                  </h5>
                  <p className='mt-2 mb-4 text-gray-500'>
                    Once you have an idea, start the hosting process and we will
                    be with you through it all. Till you get your BUCKS
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='relative block py-24 lg:pt-0 bg-gray-900'>
            <div className='container mx-auto px-4'>
              <div className='flex flex-wrap justify-center lg:-mt-64 -mt-48'>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300'>
                    <div className='flex-auto p-5 lg:p-10'>
                      <h4 className='text-2xl font-semibold'>
                        Want to Contact the HostGuest Team?
                      </h4>
                      <p className='leading-relaxed mt-1 mb-4 text-gray-600'>
                        Complete this form and we will get back to you in 24
                        hours. (Pinky Promise)
                      </p>
                      <div className='relative w-full mb-3 mt-8'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          for='full-name'
                        >
                          Full Name
                        </label>
                        <input
                          type='text'
                          className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full transform3'
                          placeholder='Full Name'
                        />
                      </div>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          for='email'
                        >
                          Email
                        </label>
                        <input
                          type='email'
                          className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full transform3'
                          placeholder='Email'
                        />
                      </div>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          for='message'
                        >
                          Message
                        </label>
                        <textarea
                          rows='4'
                          cols='80'
                          className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                          placeholder='Type a message...'
                        ></textarea>
                      </div>
                      <div className='text-center mt-6'>
                        <button
                          className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 hover:text-white md:py-4 md:text-lg md:px-10 transform3'
                          type='button'
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <style jsx>{`
        .mainHeight {
          min-height: 75vh;
        }
        .imageClass {
          background-image: url('/images/banner3.jpg');
        }
        .transformer1 {
          height: 70px;
          transform: translateZ(0px);
        }
        .transformer2 {
          height: 80px;
          transform: translateZ(0px);
        }
        .imageHeight {
          max-width: 120px;
        }
        .transform3 {
          transition: all 0.15s ease 0s;
        }
        .svg1 {
          height: 95px;
          top: -94px;
        }
      `}</style>
    </>
  );
}
