import { useTranslation } from 'react-i18next';

export function Profile() {
    const { t } = useTranslation();

    return (
        <section id="profile" className="section">
            <h1>{t('profile')}</h1>
            <div className="card">
                <h2 className="card-title">{t('profileRole')}</h2>
                <p className="card-text">{t('profileBio')}</p>
            </div>
        </section>
    );
}