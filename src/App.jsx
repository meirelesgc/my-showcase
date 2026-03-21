import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './utils/i18n';
import './App.css';

import { Welcome } from './sections/Welcome';
import { Works } from './sections/Works';
import { Profile } from './sections/Profile';
import { Contacts } from './sections/Contacts';

function App() {
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState('welcome');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const toggleLanguage = () => {
        const langs = ['pt', 'en', 'fr'];
        let currentIndex = langs.indexOf(i18n.language);
        if (currentIndex === -1) currentIndex = 0;
        const nextLang = langs[(currentIndex + 1) % langs.length];
        i18n.changeLanguage(nextLang);
    };

    return (
        <div className="app-container">
            <nav className="floating-nav">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>

                <span className="nav-text">
                    {t(activeSection)}
                </span>

                <button onClick={toggleLanguage} className="lang-toggle-btn">
                    {i18n.language}
                </button>
            </nav>

            <Welcome />
            <Works />
            <Profile />
            <Contacts />
        </div>
    );
}

export default App;