import React from 'react'

const Experience: React.FC = () => {
  return (
    <section className="mb-16">
      {/* Section Title with Icon */}
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-semibold text-[#8e93db]">Experiencia</h2>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 ml-2 text-[#8e93db]" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
          />
        </svg>
      </div>

      {/* Experience Content */}
      <div>
        <h3 className="text-xl font-medium text-accent dark:text-white mb-4">
          Junior Full-Stack developer
        </h3>

        <ul className="list-disc pl-5 space-y-2 text-secondary dark:text-dark-secondary">
          <li>Creación de componentes en Front-End y Back-End (ej. tienda online en Laravel, Angular).</li>
          <li>Diseño e implementación de interfaces de usuario desde cero (ej. buscador de películas).</li>
          <li>Optimización del diseño responsivo para diferentes tamaños de pantalla.</li>
          <li>Mejora en la eficiencia de captura y gestión de datos (ej. carga de productos y base de datos).</li>
          <li>Participación en todo el ciclo de desarrollo, desde requisitos hasta producción.</li>
        </ul>
      </div>
    </section>
  )
}

export default Experience