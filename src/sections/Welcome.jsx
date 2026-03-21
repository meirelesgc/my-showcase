import { useTranslation } from 'react-i18next';

export function Welcome() {
    const { t } = useTranslation();

    return (
        <section id="welcome" className="section welcome-hero">
            <div className="hero-top">
                <h1 className="hero-name-first">GLEIDSON</h1>
                <div className="hero-bio">
                    <p>{t('welcomeTitle')}</p>
                    <p>{t('welcomeSubtitle')}</p>
                </div>
            </div>
            <div className="hero-bottom">
                <h1 className="hero-name-last">COSTA</h1>
            </div>
        </section>
    );
}