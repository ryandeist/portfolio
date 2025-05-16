import { useLocation } from "react-router"

import AboutPage from "../AboutPage/AboutPage";
import ResumePage from "../ResumePage/ResumePage";
import ContactPage from "../ContactPage/ContactPage";
import ProjectTabs from "../ProjectTabs/ProjectTabs";

const Main = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <main>
            {path === '/' && <ProjectTabs />}
            {path === '/about' && <AboutPage />}
            {path === '/resume' && <ResumePage />}
            {path === '/contact' && <ContactPage />}
        </main>
    )
}

export default Main;