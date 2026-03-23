import { useTranslation } from 'react-i18next';

export function Contacts() {
    const { t } = useTranslation();

    return (
        <section id="contacts" className="section">
            <div className="contacts-content">
                <div className="contacts-text-area">
                    <h1 className="contacts-huge-title">
                        <span>{t('contactTitle1')}</span>
                        <span>{t('contactTitle2')}</span>
                        <span>{t('contactTitle3')}</span>
                    </h1>

                    <div className="contacts-info-block">
                        <p className="contacts-via">{t('contactVia')}</p>
                        <a href={`mailto:${t('contactEmail')}`} className="contacts-email">
                            {t('contactEmail')}
                        </a>
                    </div>

                    <div className="contacts-social">
                        <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>

                <div className="contacts-icon-area">
                    <img src="/graph.svg" alt="Graph Icon" className="contacts-svg-icon" />
                </div>
            </div>
        </section>
    );
}