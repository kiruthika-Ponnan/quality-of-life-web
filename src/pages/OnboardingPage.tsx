import React from 'react'
import { Link } from 'react-router-dom'

const OnboardingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-soft p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to Quality of Life
            </h1>
            <p className="text-gray-600">
              Choose your role to get started
            </p>
          </div>

          <div className="space-y-4">
            <Link to="/login" className="block">
              <div className="p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-blue-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    👤
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Individual</h3>
                    <p className="text-sm text-gray-600">Personal wellness journey</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/login" className="block">
              <div className="p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-blue-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    👨‍⚕️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Healthcare Provider</h3>
                    <p className="text-sm text-gray-600">Support your patients</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/login" className="block">
              <div className="p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-blue-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                    🏢
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Organization</h3>
                    <p className="text-sm text-gray-600">Employee wellness programs</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage 