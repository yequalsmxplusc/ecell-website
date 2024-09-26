import Head from 'next/head';
import Link from 'next/link';
import Header from '@/app/components/header/Header'
import Footer from "@/app/components/footer/Footer";

export default function eweekend() {
  return (
    <>
      <Head>
        <title>E-Weekend | E-Cell</title>
        <meta name="description" content="Jadavpur University Entrepreneurship Cell brings sixth E-Weekend, the forum for freshers to enter the world of entrepreneurship, problem solving, team building and networking." />
      </Head> 

      {/* Start block */}
      <Header/>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">E-Weekend</h2>
            <div className="flex items-center mb-5">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Exclusive for Freshers</span>
            </div>
            <p className="mb-4">Jadavpur University Entrepreneurship Cell brings sixth E-Weekend, the forum for freshers to enter the world of entrepreneurship, problem solving, team building and networking.</p>
            <p>Dotted with fun and learn contests, E Weekend is the cauldron that churns out fresh talent for nurturing new ideas, whetting analytical skills and garnering entrepreneurial excellence.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://juecell.in/websiteassets/Eweekend23-1109.jpg" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://juecell.in/websiteassets/newone.jpg" alt="office content 2" />
            <img className="w-full rounded-lg" src="https://juecell.in/websiteassets/Eweekend23-1173.jpg" alt="office content 2" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://juecell.in/websiteassets/Eweekend23-1182.jpg" alt="office content 2" />
          </div>
        </div>
      </section>
      {/* End block */}

      {/* Problem statements block */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white pb-4">The forum for freshers to enter the world of entrepreneurship</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg pb-8">The weekend hosts an array of events that range from B Plan competitions that drive social impact, to Case Studies that calls for analytical skills.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
              <Link href="#">
                <img className="rounded-t-lg w-full h-48" src="https://a.storyblok.com/f/133195/1967x1080/1630490359/web-graphic-challenge.jpg/m/0x0" alt="" />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PitchGenix</h5>
                </Link>
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-500 dark:text-white">Pitch your way to glory</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Glued on to Shark Tank? Have ideas always intrigued you to solve social problems? Do you have it in you to Start Up? Well then, PitchGenix is the place for you. But ideas don&apos;t make unicorns, solid plans and stellar execution does. Take the first step and ideate.</p>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Explore More
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Repeat similar divs for TechnoKraft, Corporate Devs, Data Binge */}

          </div>
        </div>
      </section>
      {/* End Problem statements block */}

      {/* Glimpses block */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Glimpses</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Over the years, we have become increasingly successful at carving out specific calendar slots for three flagship events, which attract most of our collaborations, innovative ideas and footfall.</p>
          </div>

          {/* <div className="mx-auto max-w-screen-xl text-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img className="h-64 w-full object-cover rounded-lg" src="https://juecell.in/websiteassets/databinge23.jpg" alt="" />
              <img className="h-64 w-full object-cover rounded-lg" src="https://juecell.in/websiteassets/Eweekend23-1182.jpg" alt="" />
              <img className="h-64 w-full object-cover rounded-lg" src="https://juecell.in/websiteassets/Eweekend23-1109.jpg" alt="" />
              <img className="h-64 w-full object-cover rounded-lg" src="https://juecell.in/websiteassets/eweekend7.JPG" alt="" />
              <img className="h-64 w-full object-cover rounded-lg" src="https://juecell.in/websiteassets/newone.jpg" alt="" />
              <img className="h-64 w-full object-cover rounded-lg" src="https://juecell.in/websiteassets/Eweekend23-1173.jpg" alt="" />
            </div>
          </div> */}
        </div>
      </section>
      {/* End Glimpses block */}

      {/* Include footer component here */}
      <Footer/>
    </>
  );
}
