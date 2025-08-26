import React, { useState } from 'react'
import Header from '../components/Header'

const AIMentorPage: React.FC = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI wellness mentor. How can I help you today?',
      timestamp: new Date()
    }
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user' as const,
        content: message,
        timestamp: new Date()
      }
      setMessages([...messages, newMessage])
      setMessage('')
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'ai' as const,
          content: 'Thank you for sharing that with me. I\'m here to support you on your wellness journey. What specific aspect would you like to work on?',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiResponse])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Chat Header */}
          <div className="bg-white rounded-2xl shadow-soft p-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                🤖
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  AI Wellness Mentor
                </h1>
                <p className="text-gray-600 text-sm">
                  Your personal wellness coach
                </p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="bg-white rounded-2xl shadow-soft p-6 mb-6 h-96 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white rounded-2xl shadow-soft p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 input-field"
              />
              <button
                onClick={handleSendMessage}
                className="btn-primary px-6"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIMentorPage 