import React from 'react'

interface Technology {
  name: string
  icon: string
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: Technology[]
  githubUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl
}) => {
  return (
    <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group">
      <a href={githubUrl} target="_blank" rel="noreferrer" className="block">
        <div className="relative rounded-xl overflow-hidden flex bg-indigo-100 dark:bg-gray-700/50">
          <span style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
            maxWidth: '100%'
          }}>
            <span style={{
              boxSizing: 'border-box',
              display: 'block',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              maxWidth: '100%'
            }}>
              <img 
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0
                }}
                alt="" 
                aria-hidden="true" 
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27928%27%20height=%27599%27/%3e"
              />
            </span>
            <img 
              alt={title}
              src={image}
              decoding="async"
              className="rounded-lg duration-500 transition-all translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: 'border-box',
                padding: 0,
                border: 'none',
                margin: 'auto',
                display: 'block',
                width: 0,
                height: 0,
                minWidth: '100%',
                maxWidth: '100%',
                minHeight: '100%',
                maxHeight: '100%'
              }}
            />
          </span>
        </div>
      </a>
      
      <div className="flex flex-col gap-2.5 justify-center">
        <h3 className="font-bold text-3xl text-slate-800 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-lg">{description}</p>
        
        <div className="flex gap-2 items-center mb-1">
          {technologies.map((tech, index) => (
            <img 
              key={index}
              width="20" 
              src={tech.icon} 
              alt={tech.name}
            />
          ))}
        </div>
        
        <div className="flex justify-start gap-3">
          <a 
            href={githubUrl}
            target="_blank" 
            rel="noreferrer" 
            className="flex gap-3 group/live hover:gap-6 transition-[gap] items-center text-lg py-2 px-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg"
          >
            Codigo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard