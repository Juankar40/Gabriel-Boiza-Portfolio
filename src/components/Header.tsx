import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden bg-[#e6edf3] dark:bg-gray-800">
        <img src="assets/perfil.png" alt="Gabriel Boiza" className="w-full h-full object-cover" />
      </div>

      {/* Profile Info */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-accent dark:text-white mb-1">Gabriel Boiza</h1>
        <p className="text-secondary dark:text-dark-secondary text-lg mb-4">
          Soy un apasionado desarrollador Full-Stack
        </p>

        {/* Job Status Button */}
        <a 
          href="#" 
          className="inline-flex items-center bg-green-200 text-green-800 dark:bg-green-500 dark:text-green-100 px-4 py-2 rounded-full"
        >
          <span>Buscando trabajo</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </a>
      </div>

      {/* Theme Toggle Button (Top Right) */}
      <div className="absolute top-8 right-4 md:right-8">
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header