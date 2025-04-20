import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Define translation types
type Locale = "en" | "es" | "fr";

interface Translation {
  title: string;
  description: string;
  currentLanguage: string;
  exampleContent: string;
  content1: string;
  content2: string;
  content3: string;
  tasks: string;
  task1: string;
  task2: string;
  task3: string;
  task4: string;
  task5: string;
  viewStarter: string;
  backToStarter: string;
}

type Translations = {
  [key in Locale]: Translation;
};

// Translation data
const translations: Translations = {
  en: {
    title: "Basic Internationalization (Solution)",
    description:
      "This example demonstrates basic internationalization with language switching.",
    currentLanguage: "Current Language",
    exampleContent: "Example Content",
    content1: "This is an example of translated content.",
    content2: "You can switch between different languages.",
    content3: "The content updates automatically when the language changes.",
    tasks: "Implementation Details:",
    task1: "Next.js i18n configuration",
    task2: "Translation files for each language",
    task3: "Language switching functionality",
    task4: "Translated content display",
    task5: "Language persistence",
    viewStarter: "View Starter Template",
    backToStarter: "Back to Starter",
  },
  es: {
    title: "Internacionalización Básica (Solución)",
    description:
      "Este ejemplo demuestra la internacionalización básica con cambio de idioma.",
    currentLanguage: "Idioma Actual",
    exampleContent: "Contenido de Ejemplo",
    content1: "Este es un ejemplo de contenido traducido.",
    content2: "Puedes cambiar entre diferentes idiomas.",
    content3:
      "El contenido se actualiza automáticamente cuando cambia el idioma.",
    tasks: "Detalles de Implementación:",
    task1: "Configuración de i18n en Next.js",
    task2: "Archivos de traducción para cada idioma",
    task3: "Funcionalidad de cambio de idioma",
    task4: "Visualización de contenido traducido",
    task5: "Persistencia del idioma",
    viewStarter: "Ver Plantilla Inicial",
    backToStarter: "Volver a Inicial",
  },
  fr: {
    title: "Internationalisation de Base (Solution)",
    description:
      "Cet exemple démontre l&apos;internationalisation de base avec changement de langue.",
    currentLanguage: "Langue Actuelle",
    exampleContent: "Contenu d&apos;Exemple",
    content1: "Ceci est un exemple de contenu traduit.",
    content2: "Vous pouvez basculer entre différentes langues.",
    content3:
      "Le contenu se met à jour automatiquement lors du changement de langue.",
    tasks: "Détails d'Implémentation:",
    task1: "Configuration i18n de Next.js",
    task2: "Fichiers de traduction pour chaque langue",
    task3: "Fonctionnalité de changement de langue",
    task4: "Affichage du contenu traduit",
    task5: "Persistance de la langue",
    viewStarter: "Voir le Modèle de Départ",
    backToStarter: "Retour au Départ",
  },
};

const BasicI18nSolution = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { locale = "en" } = router;
  const t = translations[locale as Locale] || translations.en;

  const changeLanguage = async (newLocale: Locale) => {
    try {
      setIsLoading(true);
      await router.push(router.pathname, router.asPath, { locale: newLocale });
    } catch (error) {
      console.error("Error changing language:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>

      <div className="mb-8">
        <p className="mb-4">{t.description}</p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{t.currentLanguage}</h2>
            <p className="mb-4">Current locale: {locale}</p>

            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => changeLanguage("en")}
                disabled={isLoading || locale === "en"}
                className={`px-4 py-2 rounded ${
                  locale === "en"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                }`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("es")}
                disabled={isLoading || locale === "es"}
                className={`px-4 py-2 rounded ${
                  locale === "es"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                }`}
              >
                Español
              </button>
              <button
                onClick={() => changeLanguage("fr")}
                disabled={isLoading || locale === "fr"}
                className={`px-4 py-2 rounded ${
                  locale === "fr"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                }`}
              >
                Français
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">{t.exampleContent}</h3>
              <p>{t.content1}</p>
              <p>{t.content2}</p>
              <p>{t.content3}</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800 font-medium">{t.tasks}</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>{t.task1}</li>
              <li>{t.task2}</li>
              <li>{t.task3}</li>
              <li>{t.task4}</li>
              <li>{t.task5}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/internationalization/starter/basic"
          className="text-blue-600 hover:underline"
        >
          {t.viewStarter}
        </Link>
        <Link
          href="/concepts/internationalization/starter"
          className="text-gray-600 hover:underline"
        >
          {t.backToStarter}
        </Link>
      </div>
    </div>
  );
};

export default BasicI18nSolution;
