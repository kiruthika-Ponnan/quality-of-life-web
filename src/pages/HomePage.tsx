import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Learn New Lesson",
      description: "Learn at your own pace with expert lessons and healthcare news. Filter topics, explore content, and save favorites for later.",
      image: "/images/feature-learn-lesson.png"
    },
    {
      id: 2,
      title: "Talking AI mentor",
      description: "Chat with your AI mentor, share your health concerns and get personalized tips and solutions instantly.",
      image: "/images/feature-ai-mentor.png"
    },
    {
      id: 3,
      title: "Book medic",
      description: "Easily browse certified medics, check reviews, and book appointments with just a few taps.",
      image: "/images/feature-book-medic.png"
    }
  ]

  const faqs = [
    "Do I need an account to use the app?",
    "Is my conversation with the AI private?",
    "Can I use the AI mentor for mental health support?",
    "How can I find the right doctor?",
    "What kind of content is available in Learn New Lesson?",
    "How often is the content updated?",
    "What can I ask the AI mentor?",
    "Can I save lessons to read later?"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-[35px] border-b border-[#6088B3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[101px]">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/images/header-logo.png" alt="Quality of Life Logo" className="h-10 w-auto" />
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/product" className="text-[#6088B3] hover:text-white font-normal text-[14px] leading-[1.21]">Product</Link>
              <Link to="/application" className="text-[#6088B3] hover:text-white font-normal text-[14px] leading-[1.21]">Application</Link>
              <Link to="/features" className="text-[#6088B3] hover:text-white font-normal text-[14px] leading-[1.21]">Features</Link>
              <Link to="/questions" className="text-[#6088B3] hover:text-white font-normal text-[14px] leading-[1.21]">Questions</Link>
              <Link to="/contact" className="text-[#6088B3] hover:text-white font-normal text-[14px] leading-[1.21]">Contact Us</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:pr-8">
              <h1 className="text-[32px] lg:text-[32px] font-extrabold text-[#6088B3] mb-6 leading-[1.56]">Improve your quality of life in 10 minutes a day.</h1>
              <p className="text-[20px] lg:text-[20px] text-black mb-8 font-semibold leading-[1.21]">Explore trusted medics, check reviews, and connect fast, with so much more waiting for you!</p>
              <button className="bg-[#6088B3] hover:bg-[#4a6b8f] text-white font-semibold py-4 px-8 rounded-[20px] text-[20px] transition-colors duration-200 shadow-[0px_4px_12px_0px_rgba(96,136,179,0.25)] w-[357px] h-[63px]">START</button>
            </div>
            {/* Right Content - Phone Mockups */}
            <div className="relative flex justify-center lg:justify-end">
              <img src="/images/hero-phone-mockup.png" alt="App Screenshot" className="w-auto h-[750px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Illustration */}
            <div className="relative flex justify-center lg:justify-start">
              <img src="/images/qr-code-illustration.png" alt="QR Code Scanning" className="w-96 lg:w-[500px] h-auto" />
            </div>
            {/* Right - Call to Action */}
            <div className="text-center lg:text-left lg:pl-8">
              <div className="bg-[#FC9F70] text-black px-8 py-4 rounded-[20px] inline-block mb-8 border-2 border-[#FC9F70] shadow-[0px_4px_12px_0px_rgba(252,159,112,1)]">
                <h2 className="text-[24px] lg:text-[24px] font-bold">Scan the code. Download the app. Take control of your health.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-[#FC9F70] text-black px-8 py-4 rounded-[20px] inline-block mb-8 border-2 border-[#FC9F70] shadow-[0px_4px_12px_0px_rgba(252,159,112,1)]">
              <h2 className="text-[24px] lg:text-[24px] font-bold">These are just a few of the many features our app offers.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature) => (
              <div key={feature.id} className="text-center">
                <div className="flex justify-center">
                  <img src={feature.image} alt={feature.title} className="w-auto h-[600px] object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-[#FC9F70] text-black px-8 py-4 rounded-[20px] inline-block mb-8 border-2 border-[#FC9F70] shadow-[0px_4px_12px_0px_rgba(252,159,112,1)]">
              <h2 className="text-[24px] lg:text-[24px] font-bold">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-[#FC9F70] rounded-[20px] p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14px] lg:text-[14px] font-normal text-black pr-4 leading-[1.21]">{faq}</h3>
                  <svg className="w-6 h-6 text-[#6088B3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6088B3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Logo and Social */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <img src="/images/footer-logo.png" alt="Quality of Life Logo" className="h-10 w-auto" />
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            {/* Company Links */}
            <div className="flex flex-col items-center">
              <h4 className="text-[16px] font-medium mb-4 leading-[1.21]">COMPANY</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-gray-200 text-[14px] font-normal leading-[1.21] transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-white hover:text-gray-200 text-[14px] font-normal leading-[1.21] transition-colors duration-200">Team</a></li>
              </ul>
            </div>
            {/* Help Links */}
            <div className="flex flex-col items-center">
              <h4 className="text-[16px] font-medium mb-4 leading-[1.21]">HELP</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-gray-200 text-[14px] font-normal leading-[1.21] transition-colors duration-200">FAQ</a></li>
                <li><a href="#" className="text-white hover:text-gray-200 text-[14px] font-normal leading-[1.21] transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-white hover:text-gray-200 text-[14px] font-normal leading-[1.21] transition-colors duration-200">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage 