import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    pt: {
        translation: {
            welcome: "Bem-vindo",
            works: "Trabalhos",
            profile: "Perfil",
            contacts: "Contatos",
            welcomeTitle: "Engenheiro de Dados",
            welcomeSubtitle: "Desenvolvimento de produtos de dados e IA",
            welcomeAction: "Saiba mais",
            worksProjectName: "Pipeline de Dados",
            worksProjectDesc: "ETL estruturado para análise em tempo real",
            worksProjectStatus: "Em produção",
            profileRole: "Desenvolvedor Front-End e Dados",
            profileBio: "Experiência com React, Python e SQL",
            contactsMethod: "Email",
            contactsAction: "Copiar"
        }
    },
    en: {
        translation: {
            welcome: "Welcome",
            works: "Works",
            profile: "Profile",
            contacts: "Contacts",
            welcomeTitle: "Data Engineer",
            welcomeSubtitle: "Data products and AI development",
            welcomeAction: "Learn more",
            worksProjectName: "Data Pipeline",
            worksProjectDesc: "Structured ETL for real-time analysis",
            worksProjectStatus: "In production",
            profileRole: "Front-End and Data Developer",
            profileBio: "Experience with React, Python and SQL",
            contactsMethod: "Email",
            contactsAction: "Copy"
        }
    },
    fr: {
        translation: {
            welcome: "Bienvenue",
            works: "Travaux",
            profile: "Profil",
            contacts: "Contacts",
            welcomeTitle: "Ingénieur de Données",
            welcomeSubtitle: "Développement de produits de données et IA",
            welcomeAction: "Savoir plus",
            worksProjectName: "Pipeline de Données",
            worksProjectDesc: "ETL structuré pour l'analyse en temps réel",
            worksProjectStatus: "En production",
            profileRole: "Développeur Front-End et Données",
            profileBio: "Expérience avec React, Python et SQL",
            contactsMethod: "E-mail",
            contactsAction: "Copier"
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