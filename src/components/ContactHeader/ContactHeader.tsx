import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactHeader = () => {
    return (
        <section className="p-6 sm:p-10 mb-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10">
                contact me?
            </h1>

            <div className="flex flex-row justify-center items-center gap-8 sm:gap-10 text-indigo-600">
                <a
                    href="mailto:ryandeist@gmail.com"
                    className="hover:text-white transition"
                    aria-label="Email"
                >
                    <FaEnvelope className="w-14 h-14 sm:w-16 sm:h-16" />
                </a>

                <a
                    href="https://linkedin.com/in/ryantdeist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="w-14 h-14 sm:w-16 sm:h-16" />
                </a>

                <a
                    href="https://github.com/ryandeist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="GitHub"
                >
                    <FaGithub className="w-14 h-14 sm:w-16 sm:h-16" />
                </a>
            </div>
        </section>
    );
};

export default ContactHeader;
