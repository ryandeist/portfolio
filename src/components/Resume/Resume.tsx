import { useEffect, useState } from 'react';

const Resume = () => {

    const [activeId, setActiveId] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);


    const sectionIds = ['summary', 'skills', 'projects', 'education', 'experience'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 120; // offset for sticky nav
            setIsScrolled(scrollY > 100);

            const visibleSections = sectionIds
                .map(id => {
                    const section = document.getElementById(id);
                    if (!section) return null;
                    return { id, offsetTop: section.offsetTop };
                })
                .filter(Boolean)
                .sort((a, b) => b!.offsetTop - a!.offsetTop);

            const current = visibleSections.find(section => scrollY >= section!.offsetTop);
            if (current) {
                setActiveId(current.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initial run
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <main className="relative max-w-screen-xl mx-auto px-4 pt-24 pb-16 flex gap-8">
                {/* Sticky Nav */}
                <aside className="hidden lg:flex flex-col w-48 flex-shrink-0 sticky top-24 self-start">
                    <nav className="rounded-xl p-4 space-y-4 text-base font-medium flex flex-col justify-between h-full">
                        <div className="space-y-4">
                            {sectionIds.map(id => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className={`block transition ${activeId === id
                                        ? 'text-white font-bold underline'
                                        : 'text-gray-400 hover:text-indigo-600'
                                        }`}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
                                </a>
                            ))}
                        </div>

                        {/* Download Button at Bottom */}
                        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                            <a
                                href="/Ryan-Deist-Resume.pdf"
                                download
                                className="inline-block w-full text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-semibold transition text-sm"
                            >
                                Download PDF
                            </a>
                        </div>
                    </nav>
                </aside>


                {/* Resume Content */}
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 text-gray-800 lg:w-3/4">

                    {/* Header */}
                    <header className="text-center mb-10">
                        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-600">Ryan Deist</h1>
                        <p className="mt-2 text-sm sm:text-base">
                            Baltimore, MD • <a href="mailto:ryandeist@gmail.com" className="underline">ryandeist@gmail.com</a> •
                            <a href="https://linkedin.com/in/ryantdeist" className="underline ml-1" target="_blank">LinkedIn</a> •
                            <a href="https://github.com/ryandeist" className="underline ml-1" target="_blank">GitHub</a>
                        </p>
                    </header>

                    {/* Summary */}
                    <section id="summary" className="mb-10 md:pb-5">
                        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
                        <p>
                            Creative and detail-oriented Software Engineer with a proven track record of developing successful applications and deep insight into the dynamics of high-performing engineering teams, gained through years of recruiting and evaluating high-performing software engineers. Demonstrated ability to bridge technical requirements with practical solutions, identifying architectural solutions and developing scalable applications with clean, maintainable code. Expertise in JavaScript, Python, and modern frameworks.
                        </p>
                    </section>

                    {/* Skills */}
                    <section id="skills" className="my-10 md:py-5">
                        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                        <ul className="flex flex-wrap gap-2 text-sm text-indigo-700">
                            {[
                                'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Python', 'Django',
                                'MongoDB', 'PostgreSQL', 'RESTful APIs', 'HTML', 'CSS', 'Tailwind CSS', 'Git',
                                'GitHub', 'Netlify', 'Heroku', 'Vercel', 'Agile Workflow', 'Remote Collaboration'
                            ].map(skill => (
                                <li key={skill} className="bg-indigo-100 px-3 py-1 rounded">{skill}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Projects */}
                    <section id="projects" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

                        <div className="mb-6">
                            <h3 className="font-bold text-lg text-indigo-600">Moovr</h3>
                            <p className="text-sm italic text-gray-600">React, Django, PostgreSQL, Tailwind CSS</p>
                            <p className="text-sm mt-1">
                                Moovr is a React-Django application that helps moving companies or individuals track items and boxes during relocations. This project provided an opportunity to build a custom Django API and integrate it with a React front end. It also allowed me to refine my JavaScript and React skills by developing several dynamic and creative UI components.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-bold text-lg text-indigo-600">Media Match</h3>
                            <p className="text-sm italic text-gray-600">React, Express.js, Node.js, MongoDB</p>
                            <p className="text-sm mt-1">
                                Media Match is a MERN stack application that helps users build a game library based on their preferences, with future support for other media. It offers a simple interface for discovering new content. Developing this app allowed our team to showcase React’s strengths, including reusable components, useContext, useEffect, and service functions to connect our Express API and perform CRUD operations.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-bold text-lg text-indigo-600">MDL Stat Tracker</h3>
                            <p className="text-sm italic text-gray-600">JavaScript, Express.js, Node.js, MongoDB, Bulma CSS</p>
                            <p className="text-sm mt-1">
                                This application is a MEN Stack application that tracks all-time coach data for players in a fantasy league I have run for 14+ years. It showcased my understanding of RESTful routes and CRUD in a real-world setting and presented unique challenges with authentication, session validation, data visualization, and styling.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg text-indigo-600">Browser Battleship</h3>
                            <p className="text-sm italic text-gray-600">JavaScript, HTML, CSS</p>
                            <p className="text-sm mt-1">
                                This is an adaptation of the classic board game Battleship. I built all game logic in JavaScript from scratch. It provided an opportunity to solve logic-heavy problems such as ship placement, validation, and sink detection — most other versions handle these in HTML/CSS. My version is responsive and built with clean vanilla code.
                            </p>
                        </div>
                    </section>

                    {/* Education */}
                    <section id="education" className="mb-10 md:py-5">
                        <h2 className="text-2xl font-semibold mb-2">Education</h2>
                        <p className="font-bold">General Assembly – Software Engineering Immersive</p>
                        <p className="text-sm text-gray-600">Graduating April 2025</p>

                        <p className="mt-4 font-bold">Towson University – B.S. Sports Management</p>
                        <p className="text-sm text-gray-600">Minor: Business Administration</p>
                    </section>

                    {/* Experience */}
                    <section id="experience" className='mb-10 md:py-5'>
                        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>

                        <div className="mb-6">
                            <h3 className="font-bold">Recruiting Specialist – SignTraker Technologies</h3>
                            <p className="text-sm text-gray-600">Aug 2024 – Present</p>
                            <ul className="list-disc list-inside text-sm mt-1">
                                <li>Recruited for highly technical roles including Frontend Developer, Database Engineer, and QA</li>
                                <li>Collaborated with company leadership on full recruiting process</li>
                                <li>Posted, sourced, and screened candidates for technical and non-technical positions</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-bold">Talent Partner – Veeva Systems</h3>
                            <p className="text-sm text-gray-600">Jan 2022 – Aug 2024</p>
                            <ul className="list-disc list-inside text-sm mt-1">
                                <li>Led recruiting efforts for Veeva’s internal IT and Operations departments</li>
                                <li>Consulted with hiring managers to understand technical skill requirements</li>
                                <li>Collaborated cross-functionally to improve hiring process and reduce time-to-hire</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold">Technical Recruiter – Latitude Inc.</h3>
                            <p className="text-sm text-gray-600">Apr 2019 – Dec 2021</p>
                            <ul className="list-disc list-inside text-sm mt-1">
                                <li>Worked on roles in software, data, DevOps, and cloud for commercial and government clients</li>
                                <li>Built technical knowledge to assess candidate and role alignment</li>
                                <li>Recognized as top-producing recruiter in 2020 and 2021</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            {isScrolled && (
                <a
                    href="#"
                    className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg transition-opacity duration-300 opacity-100 animate-fade-in"
                >
                    ↑ Back to Top
                </a>
            )}
        </>
    );
};

export default Resume;
