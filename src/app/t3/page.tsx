import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'T3 Stack Development Bootcamp - Codecamp Advantage',
  description: 'Master T3 stack development with our intensive bootcamp',
}

export default function T3CoursePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">T3 Stack Development Bootcamp</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-700">
                  This cutting-edge bootcamp is designed to transform aspiring developers into proficient full-stack professionals, 
                  specializing in the T3 stack. Through a blend of part-time instruction and hands-on projects, you'll gain the skills 
                  to build modern, type-safe, and scalable web applications using Next.js 14, React, TypeScript, Prisma, tRPC, 
                  Tailwind CSS, NextAuth.js, and Supabase.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Details</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Duration: 15 weeks (75 days)</li>
                  <li>Daily commitment: 2-4 hours</li>
                  <li>Prerequisites: Basic understanding of HTML, CSS, and JavaScript</li>
                  <li>Familiarity with React basics is helpful but not required</li>
                  <li>No prior experience with TypeScript or other T3 stack technologies required</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Learning Objectives</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Master full-stack development using the T3 stack</li>
                  <li>Develop proficiency in building type-safe APIs with tRPC</li>
                  <li>Gain expertise in creating server-side rendered React applications with Next.js 14</li>
                  <li>Learn to design and manage databases using Prisma and Supabase</li>
                  <li>Understand and implement authentication and authorization with NextAuth.js</li>
                  <li>Acquire skills in styling modern web applications with Tailwind CSS</li>
                  <li>Learn deployment and DevOps practices for T3 stack applications</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies Covered</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Next.js 14</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Prisma</li>
                  <li>tRPC</li>
                  <li>Tailwind CSS</li>
                  <li>NextAuth.js</li>
                  <li>Supabase</li>
                  <li>Vercel</li>
                  <li>Git and GitHub</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Personal Blog Application (Units 0-3)</li>
                  <li>E-commerce Platform (Units 4-5)</li>
                  <li>Social Media Dashboard with Authentication (Units 6-7)</li>
                  <li>Real-Time Chat Application (Units 8-10)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Career Prospects</h2>
                <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Full-Stack T3 Developer</li>
                  <li>Next.js Specialist</li>
                  <li>TypeScript Frontend Developer</li>
                  <li>tRPC API Developer</li>
                  <li>Jamstack Developer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Enroll</h2>
              <p className="text-gray-700">
                Visit our website to fill out the application form. Our admissions team will contact you 
                to schedule an interview and provide next steps.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
