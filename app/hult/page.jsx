import React from 'react'
import Header from '../components/header/header';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

const Hult = () => {
  return (
    <>

<Head>
<title>Hult Prize OnCampus | E-Cell</title>
</Head>
<Header/>


  {/* <!-- Start block --> */}
  <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Hult Prize OnCampus</h2>
        <p className="mb-4">Hult Prize is the world&apos;s largest social entrepreneurship ideation competition, which is organized across institutes in more than 120 countries. The problem statement for the same is announced annually by President Bill Clinton, after which a detailed case challenge is published. The global winner receives $1 million as seed-funding for their idea.
        </p>
        <p className="mb-4">Our varsity saw the first edition of the event in the year 2016. Since then, we have been serving as the main organizing committee for the same. It is generally organized in the month of November, with the signature &quot;infoseminar&quot; series in the days leading to the main event.</p>
        <p>The winning teams qualify for Hult Regionals rounds, our teams have represented the university at cities like Shanghai, Tokyo, Ankara, Jakarta, Kuala Lumpur, San Francisco, London etc.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {/* <img className="w-full rounded-lg" src="https://juecell.in/websiteassets/IMG_1099.JPG" alt="office content 1">
        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://juecell.in/websiteassets/IMG_0980.JPG" alt="office content 2">
        <img className="w-full rounded-lg" src="https://juecell.in/websiteassets/hult.jpg" alt="office content 2"> */}
        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://a.storyblok.com/f/133195/1914x1276/920a573ccd/quarterfinals.png/m/0x0" alt="office content 2"/>
      </div>
    </div>
  </section>

  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white pb-8">2023 Timeline</h2>



        <ol className="items-center sm:flex">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Qualifiers</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Nov - Feb</time>

            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quarter Finals</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March</time>

            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Semi Finals</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June</time>

            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Global Accelerator</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July - Sep</time>
              {/* <!-- <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p> --> */}
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Global Finals</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sep</time>
              {/* <!-- <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p> --> */}
            </div>
          </li>
        </ol>





      </div>
      </div>
  </section>
  {/* <!-- End Timeline --> */}

  {/* <!-- Start Problem statements block --> */}
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white pb-4">Previous Editions</h2>
        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg pb-8">Over the years, we have become increasingly successful at carving out specific calendar slots for three flagship events, which attract most of our collaborations, innovative ideas and footfall.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://a.storyblok.com/f/133195/1967x1080/1630490359/web-graphic-challenge.jpg/m/0x0" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Redesigning Fashion</h5>
            </a>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className="flex items-center justify-between pt-8">

              {/* <!-- <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">2023</a>
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Winners</a>

              <div className="bottom-3 right-4 ">
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Download Full PS
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div> --> */}

            </div>

          </div>
        </div>


        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://youcanleadbn.com/wp-content/uploads/2020/11/food-for-good-1280x640.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Food for Good</h5>
            </a>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            {/* <div className="flex items-center justify-between pt-8">
              <!-- <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">2021</a>
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Winners</a>


              <div className="bottom-3 right-4 ">
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Download Full PS
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div> --> */}

            </div>
          </div>
        </div>


        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://pbs.twimg.com/media/EFKesgzWkAEt7uU.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sustainable Development</h5>
            </a>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

            {/* <div className="flex items-center justify-between pt-8"> */}
              {/* <!-- <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">2020</a>
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Winners</a>


              <div className="bottom-3 right-4 ">
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Download Full PS
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div> --> */}

            </div>
          </div>



        {/* </div> */}
      </div>

  </section>
  {/* <!-- End Problem statements block --> */}

  {/* <!-- Start winners block --> */}
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white pb-4">Past Winners</h2>
      </div>

      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <a href="#" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All Years</a>
        <a href="#winners-2023" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">2023</a>
        <a href="#winners-2021" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">2021</a>
        <a href="#winners-2020" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">2020</a>
      </div>

      {/* <!-- 2022-23 winners --> */}
      <div id="winners-2023" className="mx-auto max-w-screen-md text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white pb-4">2022-2023</h2>
      </div>

      <div className="mb-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* <!-- team 1 --> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://juecell.in/websiteassets/2023-winner.jpg" alt="" />
          </a>
          <div className="p-5">

            <div className="pb-3 flex items-center space-x-4 text-center">
              <div className="flex-1 min-w-0">
                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                  Team Inflection
                </p>
              </div>
            </div>

            <hr className="mb-4"/>

            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Samrat Bandyopadhyay
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Production &apos;24
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Abdur Rahman
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Production &apos;24
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Dhrubajyoti Patra
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Production &apos;24
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Abhishek Pathak
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Production &apos;24
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Ramkrishna Barman
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Production &apos;24
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

            </ul>


          </div>
        </div>

        {/* <!-- team 2 --> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://juecell.in/websiteassets/2023-firstrunnerup.jpg" alt="" />
          </a>
          <div className="p-5">

            <div className="pb-3 flex items-center space-x-4 text-center">
              <div className="flex-1 min-w-0">
                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                  Team Goal Diggers
                </p>
              </div>
            </div>

            <hr className="mb-4"/>

            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">

              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Supriti Sarkar
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Chemical &apos;25
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Sarthak Jauhari
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Economics &apos;24
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Aneesh Ranjan Gupta
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Electrical &apos;25
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Soham Dutta
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Information Technology &apos;25
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

            </ul>


          </div>
        </div>

        {/* <!-- team 3 --> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://juecell.in/websiteassets/2023-secondrunnersup.jpg" alt="" />
          </a>
          <div className="p-5">

            <div className="pb-3 flex items-center space-x-4 text-center">
              <div className="flex-1 min-w-0">
                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                  Team Three&apos;s Company
                </p>
              </div>
            </div>

            <hr className="mb-4"/>

            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Soumya Roychowdhury
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Production &apos;24
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Arkaprava Ray
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Production &apos;24
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Suraj Kumar Ojha
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Production &apos;24
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

            </ul>


          </div>
        </div>
      </div>


      {/* <!-- 2020-21 winners --> */}
      <div id="winners-2021" className="mx-auto max-w-screen-md text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white pb-4">2020-2021</h2>
      </div>

      <div className="mb-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* <!-- team 1 --> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://juecell.in/websiteassets/coldlink-winner2021.jpg" alt="" />
          </a>
          <div className="p-5">

            <div className="pb-3 flex items-center space-x-4 text-center">
              <div className="flex-1 min-w-0">
                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                  Team Cold Link
                </p>
              </div>
            </div>

            <hr className="mb-4"/>

            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="https://juecell.in/websiteassets/coldlink-winner2021.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Samriddhi Ganguly
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Production &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Sagnik Sarkar
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Mechanical &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Rahul Chakraborty
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Mechanical &apos;22
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

            </ul>


          </div>
        </div>

        {/* <!-- team 2 --> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://juecell.in/websiteassets/hultaciers-1strunnersup-2021.jpg" alt="" />
          </a>
          <div className="p-5">

            <div className="pb-3 flex items-center space-x-4 text-center">
              <div className="flex-1 min-w-0">
                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                  Team Aciers
                </p>
              </div>
            </div>

            <hr className="mb-4"/>

            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">

              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Sourodeep Roy
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Metallurgical & Material Engineering &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Priyam Biswas
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Metallurgical & Material Engineering &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Debjit Sarkar
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Metallurgical & Material Engineering &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Barun Kumar Rai
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Metallurgical & Material Engineering &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

            </ul>


          </div>
        </div>

        {/* <!-- team 3 --> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://juecell.in/websiteassets/foodedge-2ndrunnersup-2021.jpg" alt="" />
          </a>
          <div className="p-5">

            <div className="pb-3 flex items-center space-x-4 text-center">
              <div className="flex-1 min-w-0">
                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                  Team FoodEdge
                </p>
              </div>
            </div>

            <hr className="mb-4"/>

            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Sailesh Sharda
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Chemical &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Sayandeep Ghosh
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Instrumentation and Electronics &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0"> */}
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image"/>
                  {/* </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Ehtesham Khursheed
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Electronics and Telecommunication &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

            </ul>


          </div>
        </div>
      </div>

      {/* <!-- 2019-20 winners --> */}
      <div id="winners-2020" className="mx-auto max-w-screen-md text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white pb-4">2019-2020</h2>
      </div>

      <div className="mb-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* <!-- team 1 --> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://juecell.in/websiteassets/2020-winner.JPG" alt="" />
          </a>
          <div className="p-5">

            <div className="pb-3 flex items-center space-x-4 text-center">
              <div className="flex-1 min-w-0">
                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                  Team Blitzkrieg Enterprises
                </p>
              </div>
            </div>

            <hr className="mb-4"/>

            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="https://juecell.in/websiteassets/coldlink-winner2021.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Srijan Sur
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Metallurgical & Material Engineering &apos;22
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Soham Das
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Metallurgical & Material Engineering &apos;22
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Kushal Chakraborti
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Metallurgical & Material Engineering &apos;22
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Soumyadeep Roy
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Metallurgical & Material Engineering &apos;22
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

            </ul>


          </div>
        </div>

        {/* <!-- team 2 --> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://juecell.in/websiteassets/2020-firstrunnerupreal.JPG" alt="" />
          </a>
          <div className="p-5">

            <div className="pb-3 flex items-center space-x-4 text-center">
              <div className="flex-1 min-w-0">
                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                  Team Micro
                </p>
              </div>
            </div>

            <hr className="mb-4"/>

            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">

              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Sarthak Roy
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Mechanical &apos;22
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Shashank Shekhar
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Mechanical &apos;22
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Kaustav Das
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Mechanical &apos;22
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Ankit Jaiswal
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Electrical &apos;22
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

            </ul>


          </div>
        </div>

        {/* <!-- team 3 --> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-60" src="https://juecell.in/websiteassets/2019-20-2nd-runnersup.JPG" alt="" />
          </a>
          <div className="p-5">

            <div className="pb-3 flex items-center space-x-4 text-center">
              <div className="flex-1 min-w-0">
                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                  Team Palok Poriborton
                </p>
              </div>
            </div>

            <hr className="mb-4"/>

            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Dibyangana Misra
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Food Technology and Biochemical Engineering &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Arghadeep Sadhu
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Food Technology and Biochemical Engineering &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div> --> */}
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  {/* <!-- <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
                  </div> --> */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Ananya Banerjee
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Food Technology and Biochemical Engineering &apos;23
                    </p>
                  </div>
                  {/* <!-- <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div> --> */}
                </div>
              </li>

            </ul>


          </div>
        </div>
      </div>

    </div>
  </section>
 
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Glimpse</h2>
        {/* <!-- <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Over the years, we have become increasingly successful at carving out specific calendar slots for three flagship events, which attract most of our collaborations, innovative ideas and footfall.</p> --> */}
      </div>

    </div>

    {/* <div className="mx-auto max-w-screen-xl text-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://juecell.in/websiteassets/WhatsApp%20Image%202023-03-23%20at%2020.50.51.jpeg" alt="">
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://juecell.in/websiteassets/WhatsApp%20Image%202023-03-23%20at%2020.49.48.jpeg" alt="">
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://juecell.in/websiteassets/IMG_1101%20(1).JPG" alt="">
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://juecell.in/websiteassets/IMG_1099.JPG" alt="">
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://juecell.in/websiteassets/IMG_1066.JPG" alt="">
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://juecell.in/websiteassets/WhatsApp%20Image%202023-03-23%20at%2020.49.47.jpeg" alt="">
        </div>
      </div>
    </div> */}

  </section>
  <Footer/>
    </>
  )
}

export default Hult;