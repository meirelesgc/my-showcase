import { useTranslation } from 'react-i18next';

export function Works() {
    const { t } = useTranslation();

    return (
        <section id="works" className="section">
            <h1>{t('works')}</h1>
            <div className="card">
                <h2 className="card-title">{t('worksProjectName')}</h2>
                <p className="card-text">{t('worksProjectDesc')}</p>
                <span className="indicator">{t('worksProjectStatus')}</span>
            </div>
        </section>
    );
}