import { useTranslation } from 'react-i18next';
import './utils/i18n';
import './App.css';

import { Welcome } from './sections/Welcome';
import { Works } from './sections/Works';
import { Profile } from './sections/Profile';
import { Contacts } from './sections/Contacts';

function App() {
    const { i18n } = useTranslation();

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

            <Welcome />
            <Works />
            <Profile />
            <Contacts />
        </div>
    );
}

export default App;