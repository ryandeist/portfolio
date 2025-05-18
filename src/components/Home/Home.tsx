import { useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './Home.css';

type Project = {
    title: string;
    description: string;
};

const projects: Project[] = [
    {
        title: 'Task Tracker',
        description: 'A full-stack app for managing tasks efficiently with React and Express.',
    },
    {
        title: 'E-Commerce Site',
        description: 'A responsive storefront with shopping cart and Stripe payments.',
    },
    {
        title: 'Chat App',
        description: 'Real-time messaging app using WebSockets and Node.js.',
    },
    {
        title: 'Portfolio Website',
        description: 'This site! Built with React, TypeScript, and deployed on Vercel.',
    },
];

const Home = () => {
    const [activeTab, setActiveTab] = useState(0);
    const nodeRef = useRef(null);

    return (
        <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
            {/* Hero Section with Animated Gradient */}
            <section className="relative text-center mb-8 overflow-hidden rounded-2xl p-6 md:p-12 bg-gradient-animated bg-long-x animate-scroll-x bg-repeat-x">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Ryan Deist</h1>
                <p className="text-gray-800 text-md sm:text-lg">
                    <span className="inline sm:hidden">Full-stack developer</span>
                    <span className="hidden sm:inline">
                        Full-stack developer passionate about building clean, efficient, and user-friendly applications.
                    </span>
                </p>
            </section>

            {/* Tabs */}
            <section className="border-t border-gray-200 pt-8">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4 mb-6">
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex-1 sm:flex-none min-w-[140px] text-center px-4 py-2 rounded-md font-medium transition-colors duration-200
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
                        <div ref={nodeRef} className="text-center px-4">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                {projects[activeTab].title}
                            </h2>
                            <p className="text-gray-600 text-md">{projects[activeTab].description}</p>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </section>
        </main>
    );
};

export default Home;