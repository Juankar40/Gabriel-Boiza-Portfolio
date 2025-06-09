import React from 'react'
import SmallProjectCard from './SmallProjectCard'

const OtherProjects: React.FC = () => {
  const projects = [
    {
      title: "Rick&Morty API",
      description: "Una pagina simple para ver los personajes de Rick y Morty.",
      technologies: [
        { name: "HTML5", icon: "assets/html5.svg" },
        { name: "Sass", icon: "assets/sass.svg" },
        { name: "Angular", icon: "assets/angular.svg" },
        { name: "TypeScript", icon: "assets/typescript.svg" }
      ],
      url: "https://rick-and-morty-mu-smoky.vercel.app/"
    },
    {
      title: "Recreación tienda online",
      description: "Recreación de tienda online de videojuegos manejando datos locales",
      technologies: [
        { name: "HTML5", icon: "assets/html5.svg" },
        { name: "CSS", icon: "assets/css_old.svg" },
        { name: "JavaScript", icon: "assets/javascript.svg" }
      ],
      url: "https://game-hub-gray-mu.vercel.app/pages/home.html"
    }
  ]

  return (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-semibold text-[#8e93db]">Other projects</h2>
      </div>

      <div className="card2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <SmallProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default OtherProjects