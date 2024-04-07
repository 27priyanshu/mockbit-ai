// components/Banner.js
import React from "react";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="h-screen bg-white flex mt-40" id="course">
      <div className="w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-black text-4xl font-bold leading-9 md:text-6xl">
          Elevate your Tech Career
        </h1>
        <h1 className="text-center text-black text-4xl font-bold leading-9 md:text-6xl">with <span className="text-[#591E16]">MOCK INTERVIEW</span></h1>
        <button
          type="button"
          className="mx-auto mt-10 inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-black bg-[#BA932F] hover:bg-[#a5822a]"
        >
          <a href="/interview">Start Practicing</a>
        </button>
        <div className="grid mt-36 gap-y-8 sm:grid-cols-1 sm:gap-x-4 grid-cols-1 gap-x-4 lg:grid-cols-3 lg:gap-y-0">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#591E16]">100+</h3>
            <p className="mt-2 text-gray-500">Courses</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#591E16]">50+</h3>
            <p className="mt-2 text-gray-500">Expert Mentors</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#591E16]">100+</h3>
            <p className="mt-2 text-gray-500">Hours of Content</p>
          </div>
        </div>
        <h1 className="text-center mt-20 text-black text-3xl font-bold leading-9 md:text-4xl">
          OUR DOMAINS
        </h1>
        <div className="relative w-full">
          <div className="absolute h-1 w-28 mt-2 bg-black top-0 left-0 right-0 mx-auto"></div>
        </div>
        <div className="container mx-auto mt-36 pb-10 w-[80%]">
          <div className="grid lg:grid-cols-3 lg:gap-10 grid-cols-1 gap-28 text-black text-center md:grid-cols-1 md:gap-28 sm:grid-cols-1 sm:gap-28">
            <div className="h-300 w-200 bg-[#DEDBBC] rounded-lg shadow-md p-5">
            <img src="/data-science.png" alt="bot" className="w-36 h-36 mb-5 mx-auto mt-[-90px] transform rotate-[-10deg]" />
            <h1 className="font-bold text-xl">Data science</h1>
            Apply sophisticated data analysis methods and cutting-edge machine learning algorithms to extract valuable insights from intricate datasets in the field of data science.
            </div>
            <div className="h-300 w-200 bg-[#DEDBBC] rounded-lg shadow-md p-5">
            <img src="/artificial-intelligence.png" alt="bot" className="w-36 h-36 mb-5 mx-auto mt-[-90px] transform rotate-[-10deg]" />
            <h1 className="font-bold text-xl">Machine learning</h1>
              Leverage advanced analytical techniques and machine learning algorithms to derive actionable insights from complex datasets.
            </div>
            <div className="h-300 w-200 bg-[#DEDBBC] rounded-lg shadow-md p-5">
            <img src="/exploration.png" alt="bot" className="w-36 h-36 mb-5 mx-auto mt-[-90px] transform rotate-[-10deg]" />
            <h1 className="font-bold text-xl">Data analyst</h1>
            Utilize advanced data analysis techniques and state-of-the-art machine learning algorithms to uncover meaningful insights from complex datasets within the realm of data analysis.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;