import { useTranslation } from 'react-i18next';

export function Contacts() {
    const { t } = useTranslation();

    return (
        <section id="contacts" className="section">
            <h1 style={{ color: 'var(--text-secondary)' }}>{t('contacts')}</h1>
            <div className="card" style={{ borderBottom: '4px solid var(--accent-color)' }}>
                <h2 className="card-title">{t('contactsMethod')}</h2>
                <p className="card-text" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>user@example.com</p>
                <button className="btn" style={{ backgroundColor: 'var(--success-color)' }}>{t('contactsAction')}</button>
            </div>
        </section>
    );
}