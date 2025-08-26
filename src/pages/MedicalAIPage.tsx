import React, { useState } from 'react'
import Header from '../components/Header'

const MedicalAIPage: React.FC = () => {
  const [selectedAssistant, setSelectedAssistant] = useState<string | null>(null)
  const [message, setMessage] = useState('')

  const assistants = [
    {
      id: 'nutrition',
      name: 'Nutrition Assistant',
      description: 'Get personalized nutrition advice and meal planning',
      icon: '🥗',
      color: 'bg-green-500'
    },
    {
      id: 'fitness',
      name: 'Fitness Coach',
      description: 'Create workout plans and track your fitness goals',
      icon: '💪',
      color: 'bg-blue-500'
    },
    {
      id: 'mental-health',
      name: 'Mental Health Support',
      description: 'Get guidance for stress, anxiety, and emotional well-being',
      icon: '🧠',
      color: 'bg-purple-500'
    },
    {
      id: 'sleep',
      name: 'Sleep Specialist',
      description: 'Improve your sleep quality with personalized tips',
      icon: '😴',
      color: 'bg-indigo-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Medical AI Assistant</h1>
          
          {!selectedAssistant ? (
            <div className="grid md:grid-cols-2 gap-6">
              {assistants.map((assistant) => (
                <div
                  key={assistant.id}
                  onClick={() => setSelectedAssistant(assistant.id)}
                  className="bg-white rounded-2xl shadow-soft p-6 cursor-pointer hover:shadow-medium transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${assistant.color} rounded-xl flex items-center justify-center text-white text-xl`}>
                      {assistant.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {assistant.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {assistant.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setSelectedAssistant(null)}
                    className="p-2 text-gray-600 hover:text-primary-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className={`w-10 h-10 ${assistants.find(a => a.id === selectedAssistant)?.color} rounded-xl flex items-center justify-center text-white text-lg`}>
                    {assistants.find(a => a.id === selectedAssistant)?.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {assistants.find(a => a.id === selectedAssistant)?.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      How can I help you today?
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-gray-700">
                    Hello! I'm your {assistants.find(a => a.id === selectedAssistant)?.name.toLowerCase()}. 
                    I'm here to provide you with personalized guidance and support. What would you like to know?
                  </p>
                </div>

                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 input-field"
                  />
                  <button className="btn-primary px-6">
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MedicalAIPage 