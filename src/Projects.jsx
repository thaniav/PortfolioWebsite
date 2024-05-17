import React from 'react';

const ProjectGrid = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-3xl text-center font-semibold mb-8">My Creations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="work relative">
            <img src="assets/images/taska.png" alt="Could not load image" className="w-full h-auto" />
            <div className="layer absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-center text-white transition duration-300 opacity-0 hover:opacity-100">
              <h3 className="text-xl font-semibold mb-2">Taska</h3>
              <p className="text-sm text-center">Created a landing page for UI/UX desgin services</p>
              <a href="https://github.com/taska-workforce/taska-landing-page" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                <i className="fa fa-external-link"></i>
              </a>
            </div>
          </div>
          <div className="work relative">
            <img src="assets/images/innogen.png" alt="Could not load image" className="w-full h-auto" />
            <div className="layer absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-center text-white transition duration-300 opacity-0 hover:opacity-100">
              <h3 className="text-xl font-semibold mb-2">Innogen.in</h3>
              <p className="text-sm text-center">Leveraged wordpress to build a website for a software service company that was hosted online</p>
              <a href="https://innogen.in/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                <i className="fa fa-external-link"></i>
              </a>
            </div>
          </div>
          <div className="work relative">
            <img src="assets/images/zerkses.png" alt="Could not load image" className="w-full h-auto" />
            <div className="layer absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-center text-white transition duration-300 opacity-0 hover:opacity-100">
              <h3 className="text-xl font-semibold mb-2">Zerkses</h3>
              <p className="text-sm text-center">A modern state of the art front-end page that was created using HTML and CSS</p>
              <a href="https://zerkses.com/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                <i className="fa fa-external-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="https://github.com/thaniav?tab=repositories" className="btn inline-block px-4 py-2 rounded-xl border border-black hover:bg-white transition-colors transition duration-300">See More</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
