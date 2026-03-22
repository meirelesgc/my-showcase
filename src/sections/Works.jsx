import { useTranslation } from 'react-i18next';

const projectsData = [
    {
        id: "1",
        translationKey: "p1",
        link: "#",
        images: [
            'https://placehold.co/800x1000',
        ]
    },
    {
        id: "2",
        translationKey: "p2",
        link: "#",
        images: [
            'https://placehold.co/800x1000',
        ]
    },
    {
        id: "3",
        translationKey: "p3",
        link: "#",
        images: [
            'https://placehold.co/800x1000',
        ]
    },
    {
        id: "4",
        translationKey: "p4",
        link: "#",
        images: [
            'https://placehold.co/800x1000',
        ]
    },
    {
        id: "5",
        translationKey: "p5",
        link: "#",
        images: [
            'https://placehold.co/800x1000',
        ]
    }
];

export function Works() {
    const { t } = useTranslation();

    return (
        <section id="works" className="works-section">
            <div className="works-content">
                <h1 className="works-title">{t('works')}</h1>

                {projectsData.map((project) => (
                    <div key={project.id} className="project-grid">
                        <div className="project-column-images">
                            {project.images.map((img, index) => (
                                <img key={index} src={img} alt={`${t(`projects.${project.translationKey}.title`)} screenshot ${index + 1}`} />
                            ))}
                        </div>

                        <div className="project-column-info">
                            <h2 className="project-title">{t(`projects.${project.translationKey}.title`)}</h2>
                            <p className="project-desc">{t(`projects.${project.translationKey}.description`)}</p>
                            <p className="project-date">{t(`projects.${project.translationKey}.date`)}</p>

                            <div className="project-meta">
                                <p><strong>STACK</strong> {t(`projects.${project.translationKey}.stack`)}</p>
                            </div>

                            <a href={project.link} target="_blank" rel="noreferrer" className="btn project-link">
                                {t('visit')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}