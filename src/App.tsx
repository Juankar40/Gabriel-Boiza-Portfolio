import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Experience from './components/Experience'
import Projects from './components/Projects'
import OtherProjects from './components/OtherProjects'
import Socials from './components/Socials'

function App() {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-3xl py-8">
          <Header />
          
          {/* Main content divider */}
          <div className="border-b border-gray-200 dark:border-gray-700 mb-12"></div>
          
          <main>
            <Experience />
            <Projects />
            <OtherProjects />
            <Socials />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App