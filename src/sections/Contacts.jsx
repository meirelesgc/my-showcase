import { useTranslation } from 'react-i18next';

export function Contacts() {
    const { t } = useTranslation();

    return (
        <section id="contacts" className="section">
            <h1>{t('contacts')}</h1>
            <div className="card">
                <h2 className="card-title">{t('contactsMethod')}</h2>
                <p className="card-text">user@example.com</p>
                <button className="btn">{t('contactsAction')}</button>
            </div>
        </section>
    );
}