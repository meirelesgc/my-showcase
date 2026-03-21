export function Profile() {
    return (
        <section id="profile" className="profile-section">
            <div className="profile-text-container">
                <div className="profile-group">
                    <h3 className="profile-heading">Skills & Stack</h3>
                    <p className="profile-text">
                        JavaScript, HTML5/CSS3/SCSS<br />
                        Vue/Nuxt, Svelte/SvelteKit<br />
                        Headless CMS, Anime.js, Motion
                    </p>
                </div>

                <div className="profile-group">
                    <h3 className="profile-heading">Values & Motives</h3>
                    <p className="profile-text">
                        Design-driven, Interactions<br />
                        Atomic design, Mobile first<br />
                        Natural SEO, Accessibility
                    </p>
                </div>

                <div className="profile-group">
                    <h3 className="profile-heading">Recognition</h3>
                    <p className="profile-text">
                        Awwwards - SOTD, HM, ME<br />
                        FWA - FOTD<br />
                        CommunicationArts
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