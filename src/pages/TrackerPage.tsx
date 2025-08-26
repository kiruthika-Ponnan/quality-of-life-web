import React from 'react'
import Header from '../components/Header'

const TrackerPage: React.FC = () => {
  const metrics = [
    {
      name: 'Mood Score',
      value: 8.5,
      unit: '/10',
      change: '+0.5',
      trend: 'up',
      color: 'text-green-600'
    },
    {
      name: 'Sleep Hours',
      value: 7.2,
      unit: 'hrs',
      change: '+0.3',
      trend: 'up',
      color: 'text-blue-600'
    },
    {
      name: 'Exercise',
      value: 4,
      unit: 'days',
      change: '+1',
      trend: 'up',
      color: 'text-purple-600'
    },
    {
      name: 'Stress Level',
      value: 3.2,
      unit: '/10',
      change: '-0.8',
      trend: 'down',
      color: 'text-red-600'
    }
  ]

  const weeklyData = [
    { day: 'Mon', mood: 7, sleep: 6.5, exercise: 1, stress: 4 },
    { day: 'Tue', mood: 8, sleep: 7, exercise: 0, stress: 3 },
    { day: 'Wed', mood: 7.5, sleep: 7.5, exercise: 1, stress: 3.5 },
    { day: 'Thu', mood: 8.5, sleep: 8, exercise: 1, stress: 2.5 },
    { day: 'Fri', mood: 9, sleep: 7.5, exercise: 1, stress: 2 },
    { day: 'Sat', mood: 8.5, sleep: 8.5, exercise: 0, stress: 2.5 },
    { day: 'Sun', mood: 8.5, sleep: 7.2, exercise: 0, stress: 3.2 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Progress Tracker</h1>
          
          {/* Metrics Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric) => (
              <div key={metric.name} className="bg-white rounded-2xl shadow-soft p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">{metric.name}</h3>
                  <span className={`text-sm font-medium ${metric.color}`}>
                    {metric.change}
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">
                    {metric.value}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Chart */}
          <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Weekly Overview</h2>
            <div className="grid grid-cols-7 gap-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="text-center">
                  <div className="text-sm font-medium text-gray-600 mb-2">{day.day}</div>
                  <div className="space-y-2">
                    <div className="bg-blue-100 rounded-lg p-2">
                      <div className="text-xs text-blue-600">Mood</div>
                      <div className="text-sm font-semibold">{day.mood}</div>
                    </div>
                    <div className="bg-green-100 rounded-lg p-2">
                      <div className="text-xs text-green-600">Sleep</div>
                      <div className="text-sm font-semibold">{day.sleep}h</div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-2">
                      <div className="text-xs text-purple-600">Exercise</div>
                      <div className="text-sm font-semibold">{day.exercise}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Goals</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                  <div>
                    <h3 className="font-medium text-gray-900">Exercise 5 days/week</h3>
                    <p className="text-sm text-gray-600">4/5 days completed</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    80%
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                  <div>
                    <h3 className="font-medium text-gray-900">Sleep 8 hours/night</h3>
                    <p className="text-sm text-gray-600">Average: 7.2 hours</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    90%
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-xl">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">
                    🏆
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">7-day streak</h3>
                    <p className="text-sm text-gray-600">Consistent mood tracking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                    💪
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Fitness goal</h3>
                    <p className="text-sm text-gray-600">Completed 4 workouts this week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackerPage 