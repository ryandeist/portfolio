import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    { name: '/projects', path: '/projects' },
    { name: '/about', path: '/about' },
    { name: '/resume', path: '/resume' },
    { name: '/contact', path: '/contact' },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50" ref={wrapperRef}>
            <div className="mx-auto xl:mx-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600">

                    <Link to="/">ryandeist/portfolio</Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex ml-auto space-x-4 sm:space-x-6 lg:space-x-8">
                    {navLinks.map((link, index) =>
                            <Link
                                key={index}
                                to={link.path}
                                className="text-gray-700 hover:text-indigo-500 transition text-sm sm:text-base md:text-lg lg:text-xl"
                            >
                                {link.name}
                            </Link>
                    )}
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="flex flex-col items-end px-4 py-4 space-y-4">
                    {navLinks.map((link, index) =>
                            <Link
                                key={index}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 hover:text-indigo-500 transition"
                            >
                                {link.name}
                            </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;