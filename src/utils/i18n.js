import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    pt: {
        translation: {
            welcome: "Bem-vindo",
            works: "Trabalhos",
            profile: "Perfil",
            contacts: "Contatos"
        }
    },
    en: {
        translation: {
            welcome: "Welcome",
            works: "Works",
            profile: "Profile",
            contacts: "Contacts"
        }
    },
    fr: {
        translation: {
            welcome: "Bienvenue",
            works: "Travaux",
            profile: "Profil",
            contacts: "Contacts"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "pt",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;