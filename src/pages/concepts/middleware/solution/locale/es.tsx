import React from "react";
import Link from "next/link";

const SpanishPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Versión en Español</h1>

      <div className="mb-8">
        <p className="mb-4">
          Esta es la versión en español de la página. El middleware ha detectado
          tu preferencia de idioma y ha establecido los encabezados apropiados.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="font-medium text-gray-900">Información del Idioma:</p>
          <p className="mt-2 text-gray-900">Idioma Actual: Español (es)</p>
          <p className="mt-2 text-gray-900">Encabezado de Locale: es</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/middleware/solution/locale/en"
          className="text-blue-600 hover:underline"
        >
          View in English
        </Link>
        <Link
          href="/concepts/middleware/solution"
          className="text-blue-600 hover:underline"
        >
          Volver a Ejemplos de Middleware
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default SpanishPage;
