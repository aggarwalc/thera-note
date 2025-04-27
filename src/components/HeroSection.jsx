import React from 'react'
import journal from "../assets/journal2.png"
import therapy from "../assets/therapy2.jpg"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            A bridge between 
            <span className="bg-gradient-to-r from-violet-500 to-purple-800 text-transparent bg-clip-text"> therapists and clients</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Make conversations with your therapist easy by sharing your notes and mood in between sessions. Be proactive and foster meaningful 
            conversations along the way!
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-4 mx-3 rounded-md">
                Start for free
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                Documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            {/* <video autoPlay loop muted className="rounded-lg w-1/2 border border-violet-700 shadow-violet-400 mx-2 my-4">
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-violet-700 shadow-violet-400 mx-2 my-4">
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
             
            <img src={journal} alt="journal" className="rounded-lg w-1/2 h-50 border border-violet-700 shadow-violet-400 mx-2 my-4"></img>
            <img src={therapy} alt="therapy" className="rounded-lg w-1/2 h-50 border border-violet-700 shadow-violet-400 mx-2 my-4"></img>


        </div>
    </div>
  )
}

export default HeroSection