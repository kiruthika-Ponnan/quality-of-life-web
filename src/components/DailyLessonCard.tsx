import React from 'react'
import { Link } from 'react-router-dom'

const DailyLessonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
      <div className="relative">
        <img 
          src="/images/lesson-happiness.png" 
          alt="Daily Lesson - Happiness"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-lg font-semibold mb-1">
            Daily Lesson
          </h3>
          <p className="text-white/90 text-sm">
            The Science of Happiness
          </p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4">
          Discover the latest research on what makes us truly happy and how to apply it to your daily life.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-500">15 min read</span>
          </div>
          <Link 
            to="/lesson" 
            className="btn-primary text-sm px-4 py-2"
          >
            Start Lesson
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DailyLessonCard 