import React from 'react'
import { BsDownload } from 'react-icons/bs'
import ProfileImage from '../assets/self4.jpg'

const Home = () => {
  return (
    // Container for both image and text
    <div name='home' className='max-w-[1000px] w-full max-h-[100%] sm:flex sm:flex-row justify-center items-center mx-auto gap-5'>
        {/* Container flexbox for text */}
        <div className='w-full h-screen md:max-w-[750px] text-left'>
            <div className='max-w-[1000px] flex flex-col justify-center h-full mx-8 sm:ml-8'>
                <p className='text-[#1e3751]'>Hey there, I am</p>
                <h1 className='text-4xl md:text-7xl font-bold text-[#1e3751] mb-2'>Prashant Gupta</h1>
                <h6 className='text-2xl md:text-3xl font-bold text-[#6a7280] max-w-[800px]'>Software and DevOps Engineer</h6>
                <p className='text-[#6a7280] py-4 max-w-[700px]'>With over 4 years of experience in the tech industry, I am currently transitioning into the world of MLOps. I specialize in creating efficient, automated solutions and continuously improving systems to drive innovation</p>
                <div>	
                    <a download="Prashant_Gupta-Resume.pdf" href="/files/Prashant_Gupta-Resume.pdf" className='inline-block'>
                        {/* <button className='text-white bg-[#C3073F] px-6 py-3 my-2 flex items-center hover:bg-[#1e3751] rounded-sm'>My Resume<BsDownload className='ml-3'/></button> */}
                    </a>
                </div>
            </div>
        </div>
        <div className="hidden sm:block lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden mx-8 sm:mr-8">
            <img className='object-cover h-[100%] w-[100%]' src={ProfileImage} alt="Profile"/>
        </div>
    </div>
  )
}

export default Home