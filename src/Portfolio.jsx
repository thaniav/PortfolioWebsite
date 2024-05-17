import React from 'react';
import './index.css';  // Ensure Tailwind is imported here if it's not globally

function Portfolio() {
  return (
    <>
      <div className="intro max-w-7xl mx-auto px-4">
        <header className="flex space-mono-bold justify-end py-3 px-3">
          <div className="justify-start text-xl">Thania's Portfolio</div>
          <ul className="flex gap-8 ml-auto">
            <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a></li>
            <li><a href="#background" className="text-gray-700 hover:text-gray-900 transition-colors">Background</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a></li>
            <li><a href="#" className="text-yellow-600 hover:text-gray-900 transition-colors">Contact</a></li>
          </ul>
        </header>
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 py-3">
          <div className="flex-1">
            <div className="flex justify-center">
              <div className="mb-5 round-div">
                <h1 className="text-5xl space-mono-bold text-white m-3">THANIA VIVEK</h1>
              </div>
            </div>
            <p className="lead space-mono-regular text-lg text-white m-4">Highly motivated student with a Masters in Advanced Computer Science in University of Sheffield with over a year of work experience in the financial IT sector.</p>
            <div className="flex gap-2 justify-center mt-8">
            <a 
                                href="assets/ThaniaV_CV.pdf"  // Replace with the actual path to your resume file
                                download="Thania_Vivek_Resume.pdf"
                                className="px-9 py-6 text-lg font-medium rounded-xl border border-black hover:bg-white transition-colors"
                            >
                              DOWNLOAD RESUME
                              </a>
            </div>
          </div>
          <div className="lg:flex lg:flex-col-reverse">
            <img src="/assets/images/gradpic.png" alt="Graduation" className="w-full h-32 sm:h-48 md:h-64 lg:h-full object-cover"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
