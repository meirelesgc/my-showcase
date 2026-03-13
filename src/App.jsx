import { useTranslation } from 'react-i18next';
import './utils/i18n';
import './App.css';

function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="app-container">
            <header className="language-selector">
                <button onClick={() => changeLanguage('pt')}>PT</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
                <button onClick={() => changeLanguage('fr')}>FR</button>
            </header>

            <section id="welcome" className="section">
                <h1>{t('welcome')}</h1>
            </section>

            <section id="works" className="section">
                <h1>{t('works')}</h1>
            </section>

            <section id="profile" className="section">
                <h1>{t('profile')}</h1>
            </section>

            <section id="contacts" className="section">
                <h1>{t('contacts')}</h1>
            </section>
        </div>
    );
}

export default App;