import { useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ProjectCard from '../ProjectCard/ProjectCard';
import BattleshipImage from "/images/battleship.png";
import MediaMatchImage from "/images/mediamatch.png";
import MoovrImage from "/images/moovr.png";
import StatrackerImage from "/images/statracker.png";
import './Home.css';

type Project = {
    title: string;
    technologies: string[];
    description: string;
    url: string;
    github: string;
    image: string;
};

const projects: Project[] = [
    {
        title: 'Moovr',
        technologies: ['React.js', 'Django', 'PostgreSQL', 'Tailwind CSS'],
        description: 'Moovr is a React-Django application that helps moving companies or individuals track items and boxes during relocations. This project provided an opportunity to build a custom Django API and integrate it with a React front end. It also allowed me to refine my JavaScript and React skills by developing several dynamic and creative UI components.',
        url: 'https://moovr.netlify.app/',
        github: 'https://github.com/ryandeist/moovr-front-end',
        image: MoovrImage,
    },
    {
        title: 'Media Match',
        technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
        description: 'Media Match, a MERN stack app that helps users build a game library based on their preferences, with future support for other media. It offers a simple interface for discovering new content. Developing this app allowed our team to showcase React’s strengths, including reusable components, useContext, useEffect, and service functions to connect our Express API and perform CRUD operations.',
        url: 'https://media-match.netlify.app/',
        github: 'https://github.com/ryandeist/mern-media-match-front-end',
        image: MediaMatchImage,
    },
    {
        title: 'MDL Statracker',
        technologies: ['JavaScript', 'Express.js', 'Node.js', 'MongoDB', 'Bulma CSS'],
        description: 'This application is a MEN Stack application that tracks all time coach data for players in a fantasy leage that I have been running for 14+ years. Building this application allow me to showcase my understanding of RESTful routes and CRUD in a real-world setting. It presented unique challenges with authenication and session validation, data visualization and manipulation, and styling.',
        url: 'https://mdl-statracker-c011c52bd590.herokuapp.com/',
        github: 'https://github.com/ryandeist/mdl-statracker-app',
        image: StatrackerImage,
    },
    {
        title: 'Battleship',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        description: 'This program is an adaptation of the classic board game, Battleship. I chose this game not just because I remember it fondly from my childhood, but also it presented a great opportunity to solve unique challenges in JavaScript, like how to place the ships, validating possible placements, and sink logic. As opposed to most other browser versions of this game that have the ship placement logic handled using CSS and HTML, I developed all of the logic exclusively with JavaScript.',
        url: 'https://ryandeist.github.io/battleship-game/',
        github: 'https://github.com/ryandeist/battleship-game',
        image: BattleshipImage,
    },
];

const Home = () => {
    const [activeTab, setActiveTab] = useState(0);
    const nodeRef = useRef(null);

    return (
        <main className="max-w-7xl mx-auto px-4 pt-24 pb-16">
            <section className="relative mb-6 overflow-hidden rounded-2xl pb-2 sm:p-4 md:p-5 lg:p-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">hello.</h1>
                <p className="text-white text-md sm:text-lg md:text-xl">
                    <span className="inline sm:hidden">My name is Ryan and I am a software engineer. <br /><br />Check out my projects ↓</span>
                    <span className="hidden sm:inline">
                    I'm Ryan, a Baltimore-based software engineer with a diverse background in tech, recruiting, and service. I love solving business problems through user-focused technical solutions. Look forward to connecting!
                        <br />
                        <br />
                        <h3 className='text-white font-bold text-2xl text-center'>Check out my projects ↓</h3>
                    </span>
                </p>
            </section>

            {/* Tabs */}
            <section className="">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex-1 sm:flex-none min-w-[140px] px-4 py-2 sm:px-5 sm:py-3 
                                md:px-6 md:py-3 lg:px-8 lg:py-4 
                                text-center text-sm sm:text-base md:text-lg rounded-md font-medium transition-colors duration-200
                                ${index === activeTab
                                    ? 'bg-indigo-100 text-indigo-600'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            {project.title}
                        </button>
                    ))}
                </div>

                {/* Fade Transition Between Projects */}
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={activeTab}
                        nodeRef={nodeRef}
                        classNames="fade"
                        timeout={300}
                    >
                        <div ref={nodeRef} className="">
                            <ProjectCard project={projects[activeTab]} />
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </section>
        </main>
    );
};

export default Home;