import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Translation data
const translations = {
  en: {
    title: "Dynamic Routes (Solution)",
    description:
      "This example demonstrates dynamic routes for different languages.",
    languageRoutes: "Language Routes",
    availableRoutes: "Available Routes",
    dynamicContent: "Dynamic Content",
    content1: "This content is specific to the English route.",
    content2: "The URL reflects the current language.",
    content3: "Navigation between languages is seamless.",
    tasks: "Implementation Details:",
    task1: "Dynamic route structure",
    task2: "Language-specific pages",
    task3: "Route-based content",
    task4: "Language detection",
    task5: "Route navigation",
    viewStarter: "View Starter Template",
    backToStarter: "Back to Starter",
  },
  es: {
    title: "Rutas Dinámicas (Solución)",
    description:
      "Este ejemplo demuestra rutas dinámicas para diferentes idiomas.",
    languageRoutes: "Rutas de Idioma",
    availableRoutes: "Rutas Disponibles",
    dynamicContent: "Contenido Dinámico",
    content1: "Este contenido es específico para la ruta en español.",
    content2: "La URL refleja el idioma actual.",
    content3: "La navegación entre idiomas es fluida.",
    tasks: "Detalles de Implementación:",
    task1: "Estructura de rutas dinámicas",
    task2: "Páginas específicas por idioma",
    task3: "Contenido basado en rutas",
    task4: "Detección de idioma",
    task5: "Navegación entre rutas",
    viewStarter: "Ver Plantilla Inicial",
    backToStarter: "Volver a Inicial",
  },
  fr: {
    title: "Routes Dynamiques (Solution)",
    description:
      "Cet exemple démontre les routes dynamiques pour différentes langues.",
    languageRoutes: "Routes de Langue",
    availableRoutes: "Routes Disponibles",
    dynamicContent: "Contenu Dynamique",
    content1: "Ce contenu est spécifique à la route française.",
    content2: "L'URL reflète la langue actuelle.",
    content3: "La navigation entre les langues est fluide.",
    tasks: "Détails d'Implémentation:",
    task1: "Structure de routes dynamiques",
    task2: "Pages spécifiques par langue",
    task3: "Contenu basé sur les routes",
    task4: "Détection de la langue",
    task5: "Navigation entre les routes",
    viewStarter: "Voir le Modèle de Départ",
    backToStarter: "Retour au Départ",
  },
};

const DynamicRoutesSolution = () => {
  const router = useRouter();
  const { locale } = router;
  const t =
    translations[locale as keyof typeof translations] || translations.en;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>

      <div className="mb-8">
        <p className="mb-4">{t.description}</p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{t.languageRoutes}</h2>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  {t.availableRoutes}
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="/concepts/internationalization/solution/routes/en"
                    className={`text-blue-600 hover:underline ${
                      locale === "en" ? "font-bold" : ""
                    }`}
                  >
                    English Route
                  </Link>
                  <Link
                    href="/concepts/internationalization/solution/routes/es"
                    className={`text-blue-600 hover:underline ${
                      locale === "es" ? "font-bold" : ""
                    }`}
                  >
                    Spanish Route
                  </Link>
                  <Link
                    href="/concepts/internationalization/solution/routes/fr"
                    className={`text-blue-600 hover:underline ${
                      locale === "fr" ? "font-bold" : ""
                    }`}
                  >
                    French Route
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">{t.dynamicContent}</h3>
                <p>{t.content1}</p>
                <p>{t.content2}</p>
                <p>{t.content3}</p>
              </div>
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
          href="/concepts/internationalization/starter/routes"
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

export default DynamicRoutesSolution;
