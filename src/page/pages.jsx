import { useState } from 'react';
import Header from './componets/header';
import Sidebar from './componets/sidebar';
import AboutMain from './componets/mains/about-main';
import ResumeMain from './componets/mains/resume-main';
import Portfolio from './componets/mains/portfolio-main';
import ContactMain from './componets/mains/contact-main';

export default function Page() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderMainContent = () => {
        switch (currentPage) {
            case 'About':
                return <AboutMain />;
            case 'Resume':
                return <ResumeMain />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <ContactMain />;
            default:
                return <AboutMain />;
        }
    };

    return (
        <div className="container">
            <Header currentPage={currentPage} setPage={setCurrentPage} />
            <Sidebar />
            <div className="content">
                <main className="main">
                    {renderMainContent()}
                </main>
            </div>
        </div>
    );
}