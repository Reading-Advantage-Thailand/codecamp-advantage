import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold mb-4">Codecamp Advantage</h1>
        <h2 className="text-5xl font-bold mb-4">Master Full-Stack Development with AI</h2>
        <p className="text-xl mb-8">Personalized learning experience powered by AI. Choose your tech stack and start coding today!</p>
        <a href="#" className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Start Learning Now</a>
      </div>
    </section>
  )
}

export default Hero
