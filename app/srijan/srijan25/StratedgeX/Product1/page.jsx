import Footer from '../../../../components/footer/Footer';
import Header from '../../../../components/header/header';
import React from 'react'


const Product1 = () => {
  return (
    <>
    <Header/>
    <section className="bg-white dark:bg-gray-900 pt-16">
  <div className="pb-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md mb-8 lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Product 1
      </h2>
    </div>
  </div>
</section>
    <Footer/>
    </>
  )
}

export default Product1