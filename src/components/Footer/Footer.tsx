const Footer: React.FC = () => {
    return (
        <footer className="bg-white bg-opacity-80 text-gray-700 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
                <p className="mb-2">
                    &copy; {new Date().getFullYear()} Ryan Deist. All rights reserved.
                </p>
                <p className="space-x-2">
                    <a
                        href="https://www.freepik.com/free-photo/white-wall-texture-background_13266836.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                    >
                        Background from Freepik
                    </a>
                    <span className="text-gray-400">|</span>
                    <a
                        href="https://react-icons.github.io/react-icons/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                    >
                        Icons from React-Icons
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;