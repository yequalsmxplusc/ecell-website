// import React from 'react';
// import { useState } from 'react';

// const StartupsPage = () => {
//   const [startups] = useState([
//     {
//       LogoURL: '/path/to/logo1.png',
//       NameOfStartup: 'Startup 1',
//       ShortDescription: 'This is a short description of Startup 1.',
//       FoundingYear: '2018',
//       WebsiteLink: 'https://startup1.com'
//     },
//     // Add more startups here...
//   ]);

//   return (
//     <>
//       <link rel="icon" type="image/x-icon" href="/path/to/favicon.ico" />
//       <link rel="stylesheet" href="/path/to/output.css" />

//       <main>
//         {/* Start block */}
//         <section className="bg-white pt-16 dark:bg-gray-900">
//           <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
//             <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
//               <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
//                 Our Alumni Startups
//               </h2>
//               <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
//                 If you&apos;re looking for a place where you can find inspiration and receive practical insights to help you achieve your entrepreneurial goals, it is here.
//               </p>
//             </div>

//             <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
//               {/* Cards start here */}
//               {startups.map((startup) => (
//                 <div key={startup.NameOfStartup} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                   <a href="#">
//                     <img 
//                       className="rounded-t-lg object-contain w-full h-64 mx-auto p-8" 
//                       src={startup.LogoURL} 
//                       alt={`Image for ${startup.NameOfStartup}`} 
//                     />
//                   </a>

//                   <div className="px-5 pb-5">
//                     <a href="#">
//                       <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{startup.NameOfStartup}</h5>
//                     </a>
//                     <div className="flex items-center mt-2.5 mb-5">
//                       <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Ongoing</span>
//                     </div>

//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pb-6 truncate">{startup.ShortDescription}</p>

//                     <div className="flex items-center justify-between">
//                       <div className="bottom-3 left-4">
//                         <span className="text-xl font-bold text-gray-900 dark:text-white">Y{startup.FoundingYear}</span>
//                       </div>
//                       <div className="bottom-3 right-4">
//                         <a 
//                           href={startup.WebsiteLink} 
//                           target="_blank" 
//                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                         >
//                           Read More
//                           <svg 
//                             aria-hidden="true" 
//                             className="w-4 h-4 ml-2 -mr-1" 
//                             fill="currentColor" 
//                             viewBox="0 0 20 20" 
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               {/* Cards end */}
//             </div>
//           </div>
//         </section>
//         {/* End block */}
//       </main>
//     </>
//   );
// };

// export default StartupsPage;