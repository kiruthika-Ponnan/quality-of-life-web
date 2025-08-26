import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary-600">Quality of Life</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium">
              Home
            </Link>
            <Link to="/lesson" className="text-gray-600 hover:text-primary-600 font-medium">
              Lessons
            </Link>
            <Link to="/ai-mentor" className="text-gray-600 hover:text-primary-600 font-medium">
              AI Mentor
            </Link>
            <Link to="/tracker" className="text-gray-600 hover:text-primary-600 font-medium">
              Tracker
            </Link>
          </nav>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="/images/profile-avatar.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 