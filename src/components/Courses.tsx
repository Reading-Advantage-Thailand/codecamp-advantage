import React from 'react'
import Image from 'next/image'

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'Next.js 14 / GCP Camp',
      description: 'Master server-side rendering and static site generation with Google Cloud Platform.',
      image: '/next-js-logo.png',
    },
    {
      title: 'T3 Stack Camp',
      description: 'Build full-stack, type-safe applications with ease using Next.js, Supabase, and Vercel.',
      image: '/t3-stack-logo.png',
    },
    {
      title: 'MERN Stack Camp',
      description: 'Develop powerful web apps with MongoDB, Express, React, and Node.js.',
      image: '/mern-stack-logo.jpeg',
    },
    {
      title: 'Laravel Full-Stack Camp',
      description: 'Create robust applications with Laravel and Vue.js on Digital Ocean with Laravel Forge.',
      image: '/laravel-logo.png',
    },
  ]

  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 flex justify-center">
                <Image
                  src={course.image}
                  alt={course.title}
                  width="0"
                  height="0"
                  sizes="100vh"
                  className="h-full w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
              <p className="mb-4">{course.description}</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
