import { useTranslation } from 'react-i18next';

export function Welcome() {
    const { t } = useTranslation();

    return (
        <section id="welcome" className="section" style={{ backgroundColor: 'var(--border-color)' }}>
            <h1 style={{ color: 'var(--accent-color)' }}>{t('welcome')}</h1>
            <div className="card" style={{ borderTop: '4px solid var(--accent-color)' }}>
                <h2 className="card-title">{t('welcomeTitle')}</h2>
                <p className="card-text">{t('welcomeSubtitle')}</p>
                <button className="btn" style={{ backgroundColor: 'var(--success-color)' }}>{t('welcomeAction')}</button>
            </div>
        </section>
    );
}