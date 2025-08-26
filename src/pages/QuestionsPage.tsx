import React, { useState } from 'react'
import Header from '../components/Header'

const QuestionsPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const questions = [
    {
      id: 1,
      question: "How would you rate your overall stress level today?",
      options: ["Very Low", "Low", "Moderate", "High", "Very High"]
    },
    {
      id: 2,
      question: "How many hours of sleep did you get last night?",
      options: ["Less than 4 hours", "4-6 hours", "6-8 hours", "8-10 hours", "More than 10 hours"]
    },
    {
      id: 3,
      question: "How often do you exercise?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Daily"]
    },
    {
      id: 4,
      question: "How satisfied are you with your social relationships?",
      options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]
    }
  ]

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer })
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-blue-50 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {currentQuestion === questions.length - 1 && (
                <button className="btn-primary">
                  Complete Assessment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionsPage 