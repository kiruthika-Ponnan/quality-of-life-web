import React from 'react'
import Header from '../components/Header'

const LessonPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Lesson Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              The Science of Happiness
            </h1>
            <p className="text-gray-600">
              Daily Lesson • 15 min read
            </p>
          </div>

          {/* Lesson Content */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <div className="mb-8">
              <img 
                src="/images/lesson-happiness.png" 
                alt="Happiness Lesson"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Understanding Happiness
              </h2>
              
              <p className="text-gray-700 mb-4">
                Happiness is not just a fleeting emotion—it's a skill that can be developed and cultivated. 
                Research in positive psychology has shown that our happiness is determined by a combination 
                of genetic factors (50%), circumstances (10%), and intentional activities (40%).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Key Principles of Happiness
              </h3>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Gratitude practices increase positive emotions</li>
                <li>Strong social connections are essential for well-being</li>
                <li>Acts of kindness boost our own happiness</li>
                <li>Mindfulness helps us appreciate the present moment</li>
                <li>Physical activity releases endorphins and improves mood</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Today's Practice
              </h3>

              <p className="text-gray-700 mb-6">
                Take 5 minutes to write down three things you're grateful for today. 
                Focus on the small moments that brought you joy, no matter how simple they may seem.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Reflection Question
                </h4>
                <p className="text-blue-800">
                  What is one small change you can make today to increase your happiness?
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button className="btn-secondary">
                Previous Lesson
              </button>
              <button className="btn-primary">
                Complete Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonPage 