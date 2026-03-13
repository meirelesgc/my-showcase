import { useTranslation } from 'react-i18next';

export function Welcome() {
    const { t } = useTranslation();

    return (
        <section id="welcome" className="section">
            <h1>{t('welcome')}</h1>
            <div className="card">
                <h2 className="card-title">{t('welcomeTitle')}</h2>
                <p className="card-text">{t('welcomeSubtitle')}</p>
                <button className="btn">{t('welcomeAction')}</button>
            </div>
        </section>
    );
}