import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Translation data
const translations = {
  en: {
    title: "Advanced Features (Solution)",
    description:
      "This example demonstrates advanced internationalization features.",
    advancedFeatures: "Advanced Features",
    dateFormatting: "Date Formatting",
    numberFormatting: "Number Formatting",
    pluralization: "Pluralization",
    tasks: "Implementation Details:",
    task1: "Date formatting for different locales",
    task2: "Number and currency formatting",
    task3: "Pluralization rules",
    task4: "Language-specific formatting",
    task5: "Formatting options",
    viewStarter: "View Starter Template",
    backToStarter: "Back to Starter",
    items: "items",
    item: "item",
  },
  es: {
    title: "Características Avanzadas (Solución)",
    description:
      "Este ejemplo demuestra características avanzadas de internacionalización.",
    advancedFeatures: "Características Avanzadas",
    dateFormatting: "Formato de Fecha",
    numberFormatting: "Formato de Números",
    pluralization: "Pluralización",
    tasks: "Detalles de Implementación:",
    task1: "Formato de fecha para diferentes locales",
    task2: "Formato de números y moneda",
    task3: "Reglas de pluralización",
    task4: "Formato específico por idioma",
    task5: "Opciones de formato",
    viewStarter: "Ver Plantilla Inicial",
    backToStarter: "Volver a Inicial",
    items: "elementos",
    item: "elemento",
  },
  fr: {
    title: "Fonctionnalités Avancées (Solution)",
    description:
      "Cet exemple démontre des fonctionnalités avancées d&apos;internationalisation.",
    advancedFeatures: "Fonctionnalités Avancées",
    dateFormatting: "Format de Date",
    numberFormatting: "Format de Nombres",
    pluralization: "Pluralisation",
    tasks: "Détails d'Implémentation:",
    task1: "Format de date pour différents locales",
    task2: "Format de nombres et de devise",
    task3: "Règles de pluralisation",
    task4: "Format spécifique par langue",
    task5: "Options de format",
    viewStarter: "Voir le Modèle de Départ",
    backToStarter: "Retour au Départ",
    items: "éléments",
    item: "élément",
  },
};

const AdvancedFeaturesSolution = () => {
  const router = useRouter();
  const { locale } = router;
  const t =
    translations[locale as keyof typeof translations] || translations.en;
  const [count, setCount] = useState(1);

  // Format date based on locale
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  // Format date with time based on locale
  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date);
  };

  // Format number based on locale
  const formatNumber = (number: number) => {
    return new Intl.NumberFormat(locale).format(number);
  };

  // Format currency based on locale
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: locale === "en" ? "USD" : locale === "es" ? "EUR" : "EUR",
    }).format(amount);
  };

  // Get plural form based on count
  const getPluralForm = (count: number) => {
    return count === 1 ? t.item : t.items;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>

      <div className="mb-8">
        <p className="mb-4">{t.description}</p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{t.advancedFeatures}</h2>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-medium mb-2">{t.dateFormatting}</h3>
                <p>Formatted date: {formatDate(new Date())}</p>
                <p>Formatted date with time: {formatDateTime(new Date())}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  {t.numberFormatting}
                </h3>
                <p>Formatted number: {formatNumber(1234567.89)}</p>
                <p>Formatted currency: {formatCurrency(1234.56)}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">{t.pluralization}</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setCount(count - 1)}
                    className="px-3 py-1 bg-gray-100 rounded"
                    disabled={count <= 1}
                  >
                    -
                  </button>
                  <span>
                    {count} {getPluralForm(count)}
                  </span>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="px-3 py-1 bg-gray-100 rounded"
                  >
                    +
                  </button>
                </div>
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
          href="/concepts/internationalization/starter/advanced"
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

export default AdvancedFeaturesSolution;
