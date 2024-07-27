import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'Next.js 14 / GCP Camp',
      description: 'Master server-side rendering and static site generation with Google Cloud Platform.',
      image: '/next-js-logo.png',
      slug: 'nextjs',
    },
    {
      title: 'T3 Stack Camp',
      description: 'Build full-stack, type-safe applications with ease using Next.js, Supabase, and Vercel.',
      image: '/t3-stack-logo.png',
      slug: 't3',
    },
    {
      title: 'MERN Stack Camp',
      description: 'Develop powerful web apps with MongoDB, Express, React, and Node.js, deployed to AWS.',
      image: '/mern-stack-logo.jpeg',
      slug: 'mern',
    },
    {
      title: 'Laravel Full-Stack Camp',
      description: 'Create robust applications with Laravel and Vue.js on Digital Ocean with Laravel Forge.',
      image: '/laravel-logo.png',
      slug: 'laravel',
    },
    {
      title: 'Django + React Camp',
      description: 'Build scalable web applications with Django and React, deployed on AWS.',
      image: '/django-react-logo.png',
      slug: 'django-react',
    },
    {
      title: 'ASP.NET Core + Angular Camp',
      description: 'Develop enterprise-grade applications with ASP.NET Core and Angular, deployed on Azure.',
      image: '/aspnet-angular-logo.png',
      slug: 'aspnet-angular',
    },
    {
      title: 'Ruby on Rails + React Camp',
      description: 'Create rapid prototypes and MVPs with Ruby on Rails and React, deployed on Heroku.',
      image: '/rails-react-logo.png',
      slug: 'rails-react',
    },
    {
      title: 'Spring Boot + React Camp',
      description: 'Build robust and scalable Java applications with Spring Boot and React, deployed on AWS.',
      image: '/spring-react-logo.png',
      slug: 'spring-react',
    },
    {
      title: 'Phoenix + React Camp',
      description: 'Develop high-performance, fault-tolerant applications with Phoenix and React, deployed on Gigalixir.',
      image: '/phoenix-react-logo.png',
      slug: 'phoenix-react',
    },
    {
      title: 'FastAPI + Svelte Camp',
      description: 'Build fast, modern web applications with FastAPI and Svelte, deployed on Deta or Heroku.',
      image: '/fastapi-svelte-logo.png',
      slug: 'fastapi-svelte',
    },
  ]

  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 flex justify-center">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={100}
                  height={100}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
              <p className="mb-4 text-sm">{course.description}</p>
              <Link href={`/courses/${course.slug}`} className="text-blue-500 hover:underline">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
