import { useTranslation } from 'react-i18next';

export function Works() {
    const { t } = useTranslation();

    return (
        <section id="works" className="section">
            <h1 style={{ color: 'var(--text-secondary)' }}>{t('works')}</h1>
            <div className="card" style={{ borderLeft: '4px solid var(--success-color)' }}>
                <h2 className="card-title" style={{ color: 'var(--accent-color)' }}>{t('worksProjectName')}</h2>
                <p className="card-text">{t('worksProjectDesc')}</p>
                <span className="indicator" style={{ backgroundColor: 'var(--border-color)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{t('worksProjectStatus')}</span>
            </div>
        </section>
    );
}