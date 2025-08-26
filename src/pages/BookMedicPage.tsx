import React from 'react'
import Header from '../components/Header'

const BookMedicPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Book a Consultation</h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Doctor Selection */}
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Select a Doctor</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:border-primary-300 cursor-pointer">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    👨‍⚕️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-gray-600">Wellness Specialist</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:border-primary-300 cursor-pointer">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    👩‍⚕️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dr. Michael Chen</h3>
                    <p className="text-sm text-gray-600">Mental Health Expert</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Schedule Appointment</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input type="date" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <select className="input-field">
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Visit
                  </label>
                  <textarea 
                    className="input-field" 
                    rows={3}
                    placeholder="Describe your concerns..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookMedicPage 