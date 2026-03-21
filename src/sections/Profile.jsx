import { useTranslation } from 'react-i18next';

export function Profile() {
    const { t } = useTranslation();

    return (
        <section id="profile" className="section" style={{ backgroundColor: 'var(--border-color)' }}>
            <h1 style={{ color: 'var(--accent-color)' }}>{t('profile')}</h1>
            <div className="card" style={{ borderRight: '4px solid var(--text-secondary)' }}>
                <h2 className="card-title" style={{ color: 'var(--success-color)' }}>{t('profileRole')}</h2>
                <p className="card-text" style={{ color: 'var(--accent-color)' }}>{t('profileBio')}</p>
            </div>
        </section>
    );
}