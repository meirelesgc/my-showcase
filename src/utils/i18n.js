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
            contactsAction: "Copiar",
            visit: "VISITAR ↗",
            projects: {
                p1: {
                    title: "IaEditais",
                    description: "Plataforma analítica baseada em IA generativa para elaboração, análise e emissão de alertas em editais de compras públicas na Fiocruz.",
                    date: "2025 - Atual",
                    stack: "LangChain, LLMs, Chatbots, Agentes Virtuais"
                },
                p2: {
                    title: "Vitrine Patrimônio",
                    description: "API de gerenciamento de regras de negócio e dados. Oferece serviços de consulta e controle de bens, autenticação e gestão de usuários.",
                    date: "2024",
                    stack: "Python, FastAPI, PostgreSQL, Docker"
                },
                p3: {
                    title: "SIMCC",
                    description: "Plataforma de mapeamento de competências que integra fontes de dados como Lattes, Sucupira e JCR para busca de pesquisadores e produções científicas.",
                    date: "2024",
                    stack: "Apache Hop, Python, React JS, PostgreSQL, Power BI"
                },
                p4: {
                    title: "iaPós",
                    description: "Plataforma de recuperação de informação para análise de produção científica e governança de dados acadêmicos da Universidade Senai Cimatec.",
                    date: "Em andamento",
                    stack: "Modelagem computacional, Orquestração de dados"
                },
                p5: {
                    title: "Conectee",
                    description: "Plataforma para iterações de pesquisadores e inteligência artificial, com foco em departamentos e adição de dados do Lattes e UFMG.",
                    date: "Em andamento",
                    stack: "Integração de dados, Inteligência artificial"
                }
            }
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
            contactsAction: "Copy",
            visit: "VISIT ↗",
            projects: {
                p1: {
                    title: "IaEditais",
                    description: "Analytical platform based on generative AI for drafting, analyzing, and issuing alerts in public procurement notices at Fiocruz.",
                    date: "2025 - Present",
                    stack: "LangChain, LLMs, Chatbots, Virtual Agents"
                },
                p2: {
                    title: "Vitrine Patrimônio",
                    description: "Business rules and data management API. Offers asset inquiry and control services, authentication, and user management.",
                    date: "2024",
                    stack: "Python, FastAPI, PostgreSQL, Docker"
                },
                p3: {
                    title: "SIMCC",
                    description: "Competency mapping platform that integrates data sources such as Lattes, Sucupira, and JCR to search for researchers and scientific productions.",
                    date: "2024",
                    stack: "Apache Hop, Python, React JS, PostgreSQL, Power BI"
                },
                p4: {
                    title: "iaPós",
                    description: "Information retrieval platform for scientific production analysis and academic data governance at Senai Cimatec University.",
                    date: "In progress",
                    stack: "Computational modeling, Data orchestration"
                },
                p5: {
                    title: "Conectee",
                    description: "Platform for researcher iterations and artificial intelligence, with focus on departments and data addition from Lattes and UFMG.",
                    date: "In progress",
                    stack: "Data integration, Artificial intelligence"
                }
            }
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
            contactsAction: "Copier",
            visit: "VISITER ↗",
            projects: {
                p1: {
                    title: "IaEditais",
                    description: "Plateforme analytique basée sur l'IA générative pour la préparation, l'analyse et l'émission d'alertes dans les avis de marchés publics à la Fiocruz.",
                    date: "2025 - Présent",
                    stack: "LangChain, LLMs, Chatbots, Agents Virtuels"
                },
                p2: {
                    title: "Vitrine Patrimônio",
                    description: "API de gestion des règles métier et des données. Offre des services de consultation et de contrôle des actifs, d'authentification et de gestion des utilisateurs.",
                    date: "2024",
                    stack: "Python, FastAPI, PostgreSQL, Docker"
                },
                p3: {
                    title: "SIMCC",
                    description: "Plateforme de cartographie des compétences qui intègre des sources de données telles que Lattes, Sucupira et JCR pour la recherche de chercheurs et de productions scientifiques.",
                    date: "2024",
                    stack: "Apache Hop, Python, React JS, PostgreSQL, Power BI"
                },
                p4: {
                    title: "iaPós",
                    description: "Plateforme de recherche d'informations pour l'analyse de la production scientifique et la gouvernance des données académiques à l'Université Senai Cimatec.",
                    date: "En cours",
                    stack: "Modélisation informatique, Orchestration de données"
                },
                p5: {
                    title: "Conectee",
                    description: "Plateforme pour les itérations de chercheurs et l'intelligence artificielle, avec un accent sur les départements et l'ajout de données de Lattes et de l'UFMG.",
                    date: "En cours",
                    stack: "Intégration de données, Intelligence artificielle"
                }
            }
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