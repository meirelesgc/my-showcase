import { useTranslation } from 'react-i18next';

export function Profile() {
    const { t } = useTranslation();

    return (
        <section id="profile" className="profile-section">
            <div className="profile-text-container">
                <div className="profile-group">
                    <h3 className="profile-heading">{t('profileSkillsHeading')}</h3>
                    <p className="profile-text">
                        {t('profileSkills1')}<br />
                        {t('profileSkills2')}<br />
                        {t('profileSkills3')}
                    </p>
                </div>

                <div className="profile-group">
                    <h3 className="profile-heading">{t('profileValuesHeading')}</h3>
                    <p className="profile-text">
                        {t('profileValues1')}<br />
                        {t('profileValues2')}<br />
                        {t('profileValues3')}
                    </p>
                </div>

                <div className="profile-group">
                    <h3 className="profile-heading">{t('profileRecogHeading')}</h3>
                    <p className="profile-text">
                        {t('profileRecog1')}<br />
                        {t('profileRecog2')}<br />
                        {t('profileRecog3')}
                    </p>
                </div>
            </div>

            <img src="https://placehold.co/800x1000" alt="profile placeholder 1" className="floating-img img-1" />
            <img src="https://placehold.co/800x1000" alt="profile placeholder 2" className="floating-img img-2" />
            <img src="https://placehold.co/800x1000" alt="profile placeholder 3" className="floating-img img-3" />
            <img src="https://placehold.co/800x1000" alt="profile placeholder 4" className="floating-img img-4" />
        </section>
    );
}