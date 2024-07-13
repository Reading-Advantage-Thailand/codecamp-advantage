import Image from 'next/image';
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Laravel Full-Stack Development Bootcamp - Codecamp Advantage',
  description: 'Master Laravel full-stack development with our comprehensive bootcamp',
}

export default function LaravelCoursePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Laravel Full-Stack Development Bootcamp</h1>
          
          <div className="mb-8 flex justify-center">
            <Image
              src="/laravel-logo.png"
              alt="Laravel Logo"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-700">
                  This comprehensive bootcamp is designed to transform aspiring developers into proficient full-stack professionals, 
                  specializing in the Laravel ecosystem. Through a blend of part-time instruction and hands-on projects, you'll gain 
                  the skills to build robust, scalable web applications using PHP, Laravel, MySQL, and Vue.js.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Details</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Total length: 17 weeks (84 days)</li>
                  <li>Daily commitment: 2-4 hours</li>
                  <li>Prerequisites: Basic understanding of HTML and CSS, familiarity with programming concepts</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Learning Objectives</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Master full-stack web development using Laravel and related technologies</li>
                  <li>Develop proficiency in building RESTful APIs with Laravel</li>
                  <li>Gain expertise in creating dynamic, responsive user interfaces with Vue.js</li>
                  <li>Learn to design and manage MySQL databases for Laravel applications</li>
                  <li>Understand and implement authentication and authorization in web applications</li>
                  <li>Acquire skills in testing, deployment, and DevOps practices for Laravel projects</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies Covered</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>PHP</li>
                  <li>Laravel</li>
                  <li>MySQL</li>
                  <li>Vue.js</li>
                  <li>HTML/CSS</li>
                  <li>Git and GitHub</li>
                  <li>PHPUnit</li>
                  <li>Docker</li>
                  <li>DigitalOcean</li>
                  <li>Laravel Forge</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Personal Blog System (Units 1-3)</li>
                  <li>E-commerce Platform (Units 4-5)</li>
                  <li>Task Management Application (Units 6-7)</li>
                  <li>Social Media Analytics Dashboard (Units 8-10)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Career Prospects</h2>
                <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Full-Stack Laravel Developer</li>
                  <li>PHP Backend Developer</li>
                  <li>Laravel Specialist</li>
                  <li>Vue.js Frontend Developer</li>
                  <li>DevOps Engineer (with a focus on PHP technologies)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose This Course</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Flexible, part-time schedule suitable for working professionals</li>
                <li>Comprehensive coverage of the Laravel ecosystem</li>
                <li>Project-based curriculum reflecting real-world scenarios</li>
                <li>Focus on both backend (Laravel) and frontend (Vue.js) development</li>
                <li>Emphasis on modern PHP practices and Laravel best practices</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Enroll</h2>
              <p className="text-gray-700">
                Visit our website to fill out the application form. Our admissions team will contact you 
                to discuss your goals and provide next steps.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
