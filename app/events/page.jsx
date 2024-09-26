import React from 'react';
import Footer from "@/app/components/footer/Footer";
import Head from 'next/head';
import Header from '../components/header/header';



const Event = () => {
  const eventList = [
    {
      name: 'E-Summit',
      tagline: 'Annual Entrepreneurship Summit',
      description: 'We present you one of the largest entrepreneurial events of Eastern India, E-Summit, which will excite you to battle it out with the best entrepreneurial minds in the country and win it big in life.',
      imageSrc: '/images/summit24.png',
      altText: 'E-Summit',
      link: '/esummit',
      Date: 'October 2024'
    },
    {
      name: 'E-Weekend',
      tagline: 'Annual Freshers-Only Event',
      description: `Jadavpur University Entrepreneurship Cell is back with the first event of this academic year, the sixth edition of the flagship E-Weekend. This time it's gonna be Bigger, Better and Bolder!`,
      imageSrc: '/images/eweekend-logo.png',
      altText: 'E-Weekend',
      link: '/eweekend',
      Date: 'Coming Soon'
    },
    {
      name: 'Hult Prize On Campus',
      tagline: 'Biggest Social Entrepreneurship Event',
      description: `Hult Prize is the world's largest social entrepreneurship ideation competition, which is organized across institutes in more than 120 countries. The problem statement for the same used to be announced annually by President Bill Clinton`,
      imageSrc: '/images/eweekend-logo.png',
      altText: 'Hult Prize',
      link: '/hult',
      Date: 'Coming Soon'
    }
  ];
  return (
    <>
    <Head>
    <title>Hult Prize OnCampus | E-Cell</title>
    </Head>
      <div>
        <Header/>

        {/* Section 1 */}
        <section className="bg-white dark:bg-gray-900 pt-16">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full rounded-lg" src="/images/ecell/bgte.jpeg" alt="dashboard" />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Wings to ideas - to propel you
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Join JU E-Cell&apos;s events and connect with like-minded entrepreneurs. Gain knowledge and skills through our guest lectures, pitch competitions and networking events. Register now and be part of a passionate community of innovators.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white pb-10">
                Flagship Events
              </h2>
              <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                Over the years, we have become increasingly successful at carving out specific calendar slots for three flagship events, which attract most of our collaborations, innovative ideas, and footfall.
              </p>
            </div>

            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
              {/* Event Cards */}
              {eventList.map((event, index) => (
                <div
                  key={index}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img className="p-4 rounded-t-lg w-auto h-72 mx-auto" src={event.imageSrc} alt={event.altText} />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {event.name}
                      </h5>
                    </a>
                    <div className="flex items-center mb-5">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                        {event.tagline}
                      </span>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.description}</p>
                    <a
                      href={event.link}
                      className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white pb-10">
                Sessions and Activities
              </h2>
            </div>

            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
              {eventList.map((event, index) => (
                <div
                  key={index}
                  className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-light tracking-tight text-gray-900 dark:text-white">
                        {event['Event Name']}
                      </h5>
                    </a>
                    <div className="flex items-center justify-between pt-8">
                      <div className="bottom-3 left-4">
                        <a
                          href="#"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                        >
                          {event.Date}
                        </a>
                      </div>
                      <div className="bottom-3 right-4">
                        <a
                          href="#"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Add to Calendar
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Event;
