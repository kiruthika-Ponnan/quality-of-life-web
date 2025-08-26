import React from 'react'
import { Link } from 'react-router-dom'

const QuickActions: React.FC = () => {
  const actions = [
    {
      id: 1,
      title: "AI Mentor",
      description: "Chat with your AI wellness coach",
      icon: "🤖",
      link: "/ai-mentor",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Book Medic",
      description: "Schedule a consultation",
      icon: "👨‍⚕️",
      link: "/book-medic",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Track Progress",
      description: "Monitor your wellness journey",
      icon: "📊",
      link: "/tracker",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Medical AI",
      description: "Get health insights",
      icon: "🏥",
      link: "/medical-ai",
      color: "bg-red-500"
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action) => (
        <Link 
          key={action.id} 
          to={action.link}
          className="card hover:shadow-medium transition-shadow duration-200"
        >
          <div className="flex items-start space-x-3">
            <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-white text-xl`}>
              {action.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                {action.title}
              </h3>
              <p className="text-sm text-gray-600">
                {action.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default QuickActions 