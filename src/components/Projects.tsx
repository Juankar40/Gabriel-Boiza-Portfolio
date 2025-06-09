import React from 'react'
import ProjectCard from './ProjectCard'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Museo Apel·les Fenosa",
      description: "Aplicación web para administrar las obras museo Apel·les Fenosa bajo requisitos",
      image: "assets/apeles.png",
      technologies: [
        { name: "HTML5", icon: "assets/html5.svg" },
        { name: "Sass", icon: "assets/sass.svg" },
        { name: "JavaScript", icon: "assets/javascript.svg" },
        { name: "PHP", icon: "assets/php_dark.svg" },
        { name: "Cloudflare", icon: "assets/cloudflare.svg" }
      ],
      githubUrl: "https://github.com/Josep-Oriol/ProyectoABP-Museo"
    },
    {
      title: "PePerifericos",
      description: "Recreación completa de una tienda online de perifericos",
      image: "assets/tienda.jpeg",
      technologies: [
        { name: "HTML5", icon: "assets/html5.svg" },
        { name: "Tailwind CSS", icon: "assets/tailwindcss.svg" },
        { name: "JavaScript", icon: "assets/javascript.svg" },
        { name: "PHP", icon: "assets/php_dark.svg" },
        { name: "Laravel", icon: "assets/laravel.svg" },
        { name: "Cloudflare", icon: "assets/cloudflare.svg" }
      ],
      githubUrl: "https://github.com/Gabriel-Boiza/proyecto-tienda"
    }
  ]

  return (
    <section className="mb-16">
      {/* Section Title with Icon */}
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-semibold text-[#8e93db]">Projectos</h2>
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
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
          />
        </svg>
      </div>

      {/* Main Projects */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects