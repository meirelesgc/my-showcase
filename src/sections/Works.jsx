import { useTranslation } from 'react-i18next';

const projectsData = [
    {
        id: "1",
        title: "ATELIER.M",
        description: "Website for Parisian workshop creating custom-made pieces specializing in metal and wood work. Crafting an elegant and refined showcase for the atelier.",
        date: "2020",
        stack: "Next.js, Motion.dev, Prismic, Cloudflare",
        link: "#",
        images: [
            'https://placehold.co/800x1000',
            'https://placehold.co/800x1000',
            'https://placehold.co/800x1000',
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
                                <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} />
                            ))}
                        </div>

                        <div className="project-column-info">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-desc">{project.description}</p>
                            <p className="project-date">{project.date}</p>

                            <div className="project-meta">
                                <p><strong>STACK</strong> {project.stack}</p>
                            </div>

                            <a href={project.link} target="_blank" rel="noreferrer" className="btn project-link">
                                VISIT ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}