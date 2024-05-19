import React, { useState } from 'react';
import './index.css';  // Ensure Tailwind is imported here if it's not globally

function Background() {
    const [activeTab, setActiveTab] = useState('experience');

    function handleTabClick(tabName) {
        setActiveTab(tabName);
    }

    return (
        <section id="background" className='background space-mono-bold text-xl text-white my-5 p-5'>
            <div className="skill-titles space-mono-bold flex justify-around pt-8">
                <p 
                    className={`skill-link ${activeTab === 'experience' ? 'active-link' : ''}`} 
                    data-content="experience" 
                    onClick={() => handleTabClick('experience')}
                >
                    EXPERIENCE
                </p>
                <p 
                    className={`skill-link ${activeTab === 'education' ? 'active-link' : ''}`} 
                    data-content="education" 
                    onClick={() => handleTabClick('education')}
                >
                    EDUCATION 
                </p>
            </div>

            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''} pt-8`} id="experience">
                <ul>
                    <li><span>Java Developer </span><br /><li className='montserrat-italic'>Utilized Spring, Spring Boot, Java, and DB2 to develop robust and responsive applications for Morgan Stanley</li></li>
                    <li><span>Freelance Web developer</span><br /><li className='montserrat-italic'>Started a digital launchpad startup to provide web development services to startups and small businesses that require better UI/UX experiences.</li></li>
                </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''} pt-8`} id="education">
                <ul>
                    <li><span>UNIVERSITY OF SHEFFIELD</span><br /><li className='montserrat-italic'>MSC. ADVANCED COMPUTER SCIENCE</li></li>
                    <li><span>AMRITA SCHOOL OF ENGINEERING</span><br /><li className='montserrat-italic'>First Class with Distinction<br />B.TECH. COMPUTER SCIENCE</li></li>
                </ul>
            </div>
        </section>
    );                                                                     
}

export default Background;
