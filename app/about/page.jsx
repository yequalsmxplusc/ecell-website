import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import Header from '../components/header/header'

const page = () => {
  return (
    <>
    <Header/>
    <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet us</h2>
        <p className="mb-4">The Jadavpur University Entrepreneurship Cell was founded with the aim of fostering the spirit of entrepreneurship among the new generation. Our focus has been the establishment of an innovative mindset among the University students, which will help create entrepreneurs and thought leaders who shall play a key role in the progress of our nation&apos;s economy.
        </p>
        <p>In the years gone by, we have emerged as a platform to guide creative minds through effective interaction between the student body and esteemed members of the corporate world, including successful entrepreneurs, investors, and venture capitalists. This has enabled transformation of innovative ideas into entrepreneurial ventures.</p>

      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Image className="w-full rounded-lg" src="/images/ecell/ps1.jpeg" alt="office content 1" width={100} height={100}/>
        <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/ecell/ew2.jpeg" alt="office content 2" width={100} height={100} />
      </div>
    </div>
  </section>
  <Footer/>
    </>
  )
}

export default page