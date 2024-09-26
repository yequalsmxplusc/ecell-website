import Head from 'next/head'
import Header from '@/app/components/header/Header'
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Summit | E-Cell</title>
      </Head>

      <Header />

      <main className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">E-Summit</h2>
              <div className="flex items-center mb-5">
                <span className="bg-purple-100 text-purple-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Biggest Entrepreneurship Summit of Eastern India</span>
              </div>
              <p className="mb-4">Entrepreneurship Summit is one of the largest entrepreneurship events of eastern India. A wide variety of fixtures are organized, which range from case challenges and design competitions to simulated auctions, simulated stock and cryptocurrency markets, panel discussions by alumni and market personalities and hackathons.</p>
              <p>Participants from colleges across the country are a part of the audience, along with judges of national and international repute. Having witnessed many firsts to its credit, E-Summit has served to set new standards for its participants and organizers. For instance, Kolkata&apos;s first-ever overnight (30 hrs) hackathon was conducted in E-Summit 2020.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg" src="/images/esummit/es1.jpeg" alt="office content 1" />
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/esummit/cs1.jpeg" alt="office content 2" />
              <img className="w-full rounded-lg" src="/images/esummit/es3.jpg" alt="office content 2" />
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/esummit/es4.jpg" alt="office content 2" />
            </div>
          </div>
        </div>
      </main>

      {/* Problem statements block */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Mark your journey</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg pb-8">Over the years, we have become increasingly successful at carving out specific calendar slots for three flagship events, which attract most of our collaborations, innovative ideas and footfall.</p>
          </div>

          <div className="max-w-screen-xl px-4 pt-4 pb-8 mx-auto text-center lg:pb-16 lg:pt-8 lg:px-6">
            <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">15k+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">registrations</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">25k+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">footfall</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">5L+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">worth prizes</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">50+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">corporate partners</dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* LaunchX */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg w-full h-60" src="/images/esummit/logos/launchx.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LaunchX</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A PAN India level fundraising event, LaunchX aims to give an opportunity to launch Start-ups while developing skills. It provides early stage startups the platform to shine and get under the limelight of the ecosystem.</p>
              </div>
            </div>

            {/* Other events... */}

          </div>
        </div>
      </section>

      {/* Glimpses section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/images/esummit/es4.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/images/esummit/es6.jpeg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/images/esummit/es7.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}