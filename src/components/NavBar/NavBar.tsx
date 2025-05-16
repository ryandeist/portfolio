import './NavBar.css';
import { Link } from 'react-router';

const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'GitHub', path: 'https://github.com/ryandeist', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'LinkedIn', path: 'https://www.linkedin.com/in/ryantdeist/', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'Contact', path: '/contact' },
];

const NavBar = () => {
    return (
        <nav>
            <h1>
                <Link to='/'>
                    /portfolio
                </Link>
            </h1>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        {link.target ? (
                            <Link to={link.path} target='_blank' rel='noopener noreferrer'>
                                {link.name}
                            </Link>
                        ) : (
                            <Link to={link.path}>
                                {link.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;