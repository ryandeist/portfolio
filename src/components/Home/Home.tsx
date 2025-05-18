import { useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './Home.css'; // for the fade animation styles

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
        <main className="max-w-4xl mx-auto px-4 pt-32 pb-16">
            {/* Hero Section with Animated Gradient */}
            <section className="relative text-center mb-16 overflow-hidden rounded-2xl p-12 bg-gradient-animated bg-long-x animate-scroll-x bg-repeat-x">
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Ryan Deist</h1>
                    <p className="text-gray-800 text-lg">
                        Full-stack developer passionate about building clean, efficient, and user-friendly applications.
                    </p>
                </div>
                {/* Optional blurred gradient animation overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff11,_transparent)] opacity-20 z-0"></div>
            </section>

            {/* Tabs */}
            <section className="border-t border-gray-200 pt-8">
                <div className="flex justify-center space-x-4 mb-6">
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200
                ${index === activeTab
                                    ? 'bg-indigo-100 text-indigo-600'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
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