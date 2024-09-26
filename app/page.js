import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';
import Header from './components/header/header';

export default function Home() {
  return (
    <>
    <Header/>
    {/* // <!-- Start block --> */}
    <div className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Ideate. Innovate. Build.</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to <span className="font-semibold">Jadavpur University Institute&apos;s Innovation Council</span>, a platform to inspire the minds, to ignite the flames and to take charge of your dreams. We are a student-run organisation, under the Institution&apos;s Innovation Council, working towards realizing the dreams of budding Entrepreneurs.</p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a href="/join-us" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Join the community
            </a>
            <a href="/initiatives" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Initiatives
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src= "/images/team2023.png"  alt="hero image" width={500} height={200} style="border-radius: 20px"/>
        </div>
      </div>
    </div>
    
  
    {/* // <!-- Start block --> */}
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* <!-- Row --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Institution&apos;s Innovation Council (IIC)</h2>
            <p className="mb-8 font-light lg:text-xl">The IIC co-ordinates with the Start-up Cell and the E-Cell of the Institute, to create an innovation promotion ecosystem. Working on new ideas and transforming them into prototypes is its primary focus.<br/><br/>IIC primarily aims to</p>
            {/* <!-- List --> */}
            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
              <li className="flex space-x-3">
                {/* <!-- Icon --> */}
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Create a vibrant innovation ecosystem in the institute</span>
              </li>
              <li className="flex space-x-3">
                {/* <!-- Icon --> */}
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Support start-ups which will be scouted and pre-incubated</span>
              </li>
              <li className="flex space-x-3">
                {/* <!-- Icon --> */}
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Motivate students to come up with path-breaking solutions to indigenous problems</span>
              </li>
            </ul>
            <p className="mb-8 font-light lg:text-xl">Whether you are a student looking to launch a startup, an educator looking to bring entrepreneurship into your classNameroom or a professional working in the corporate world, we have something for everyone.</p>
          </div>
          {/* <Image className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="https://juecell.in/websiteassets/JU%20E-Cell%20IIC%20Logo.png" height={100} width={100}  alt="dashboard feature image"/> */}
        </div>
        {/* <!-- Row --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="/images/ecell/visit.jpeg" height={100} width={100} alt="feature image 2"/>
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Involved in your holistic development</h2>
            <p className="mb-8 font-light lg:text-xl">We help our members establish themselves in the field of entrepreneurship as well as business consulting by guiding and assisting them at every step, even though they start out with basic or no knowledge in the respective fields.</p>
            {/* <!-- List --> */}
            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
              <li className="flex space-x-3">
                {/* <!-- Icon --> */}
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Engaging Online/Offline sessions on Design Thinking, Data Analytics, Microeconomics</span>
              </li>
              <li className="flex space-x-3">
                {/* <!-- Icon --> */}
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Case Study sessions inculcating the practice of problem-solving</span>
              </li>
              <li className="flex space-x-3">
                {/* <!-- Icon --> */}
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Providing students with an opportunity to attend webinars by eminent industry experts</span>
              </li>
  
            </ul>
            <p className="font-light lg:text-xl">We endeavour to provide a platform to build, network and share knowledge within the student and alumni community.</p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End block --> */}
  
  
    {/* <!-- Start block --> */}
    <div className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-500">Pick up your magic wands!</p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">We aim to help dreams take off, here at Jadavpur University</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Entrepreneurship is the set of wings that a country requires to soar higher. And the Jadavpur University Entrepreneurship Cell aims at invoking a spirit of entrepreneurship among the new generation, a stepping stone towards the better future of our Nation and her growing economy.</p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <a href="/startups" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                Visit our Startup Arena
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
            <div>
              <a href="/initiatives" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                Explore opportunities
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">100+ Startups</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">Powered by JU students & alumni worldwide</p>
          </div>
          <div>
            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">25K+ Alumni</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">Network of JUians have been creating history</p>
          </div>
          <div>
            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">7+ years in Action</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">E-Cell grew exponentially and will continue to do so</p>
          </div>
          <div>
            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">300k+ Footfall</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">Across all JU E-Cell events in the campus</p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End block --> */}
  
  
    {/* <!-- Start block : Testimonial --> */}
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
          </svg>
          <blockquote>
            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">&quot;To any entrepreneur: if you want to do it, do it now. If you don&apos;t, you&apos;re going to regret it. Do Or do not. There is no try. It&apos;s not about ideas. It&apos;s about making ideas happen. I congratulate to all those students who made rigorous efforts to make this idea of an Entrepreneurship Cell in Jadavpur University come to life.&quot;</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img className="w-6 h-6 rounded-full" src="https://i.imgur.com/cXQ9Wsrt.png" alt="profile picture"/>
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">Prof. Suranjan Das</div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">VC at Jadavpur University</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
    {/* <!-- End block --> */}
  
    {/* <!-- Start block --> */}
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Explore opportunities to associate</h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Transform your innovative ideas to enntrepreneurial ventures</p>
          <a href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Applications open soon!</a>
        </div>
      </div>
    </div> 
    <Footer/>
    </>
     );
}
