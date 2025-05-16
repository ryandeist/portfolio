import './Header.css';

import { useLocation } from 'react-router';

const Header = () => {
    const location = useLocation();
    const path = location.pathname;

    let headerTitle = '';

    if (path === '/') {
        headerTitle = 'Projects';
    } else if (path === '/about') {
        headerTitle = 'About Me';
    } else if (path === '/resume') {
        headerTitle = 'Resume';
    } else if (path === '/contact') {
        headerTitle = 'Contact Me';
    }

    return (
        <header>
            <h1>{headerTitle}</h1>
        </header>
    )
}

export default Header;