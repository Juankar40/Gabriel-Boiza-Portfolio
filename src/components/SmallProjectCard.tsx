import React from 'react'

interface Technology {
  name: string
  icon: string
}

interface SmallProjectCardProps {
  title: string
  description: string
  technologies: Technology[]
  url: string
}

const SmallProjectCard: React.FC<SmallProjectCardProps> = ({
  title,
  description,
  technologies,
  url
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-sm border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
        <h3 className="text-xl font-bold text-accent dark:text-white mb-2">{title}</h3>
        <p className="text-secondary dark:text-dark-secondary mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <img 
              key={index}
              width="25" 
              src={tech.icon} 
              alt={tech.name}
            />
          ))}
        </div>
      </div>
    </a>
  )
}

export default SmallProjectCard