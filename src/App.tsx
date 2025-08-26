import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LessonPage from './pages/LessonPage'
import AIMentorPage from './pages/AIMentorPage'
import BookMedicPage from './pages/BookMedicPage'
import OnboardingPage from './pages/OnboardingPage'
import LoginPage from './pages/LoginPage'
import QuestionsPage from './pages/QuestionsPage'
import MedicalAIPage from './pages/MedicalAIPage'
import TrackerPage from './pages/TrackerPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lesson" element={<LessonPage />} />
          <Route path="/ai-mentor" element={<AIMentorPage />} />
          <Route path="/book-medic" element={<BookMedicPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/medical-ai" element={<MedicalAIPage />} />
          <Route path="/tracker" element={<TrackerPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 