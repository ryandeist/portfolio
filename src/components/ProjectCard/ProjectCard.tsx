import React from 'react';

type Project = {
    title: string;
    technologies: string[];
    description: string;
    url: string;
    github: string;
    image: string;
};

type Props = {
    project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row w-full max-w-7xl mx-auto">
            {/* Left: Image */}
            <div className="lg:w-3/5 w-full h-64 md:h-auto">
                <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right: Text Content */}
            <div className="p-6 lg:w-2/5 flex flex-col">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>

                    <ul className="flex flex-wrap gap-2 text-sm text-indigo-600 font-medium mb-4">
                        {project.technologies.map((tech, index) => (
                            <li
                                key={index}
                                className="bg-indigo-100 px-2 py-1 rounded"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-700 text-sm md:text-base">{project.description}</p>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-md text-center font-semibold overflow-hidden transition"
                    >
                        <span className="relative z-10">See the Site</span>
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full z-0 will-change-transform group-hover:animate-shimmer"
                        ></span>
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block text-gray-700 bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-md text-center font-semibold overflow-hidden transition"
                    >
                        <span className="relative z-10">See the Code</span>
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full z-0 will-change-transform group-hover:animate-shimmer"
                        ></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;