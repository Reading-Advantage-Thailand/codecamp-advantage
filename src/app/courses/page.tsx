import React from 'react';
import Link from 'next/link';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const CoursesComparisonPage: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Tech Stack Bootcamp Comparison</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Aspect</th>
              <th className="border px-4 py-2"><Link href="/courses/nextjs" className="text-blue-600 hover:underline">Next.js Camp (NJ01FS)</Link></th>
              <th className="border px-4 py-2"><Link href="/courses/nuxtjs" className="text-blue-600 hover:underline">Nuxt.js Camp (NU02FS)</Link></th>
              <th className="border px-4 py-2"><Link href="/courses/django-react" className="text-blue-600 hover:underline">Django + React Camp (DJ03FS)</Link></th>
              <th className="border px-4 py-2"><Link href="/courses/rails-react" className="text-blue-600 hover:underline">Ruby on Rails + React Camp (RR04FS)</Link></th>
              <th className="border px-4 py-2"><Link href="/courses/laravel-vue" className="text-blue-600 hover:underline">Laravel + Vue.js Camp (LV05FS)</Link></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-semibold">Backend</td>
              <td className="border px-4 py-2">Next.js API Routes</td>
              <td className="border px-4 py-2">Nuxt.js Server Middleware</td>
              <td className="border px-4 py-2">Django</td>
              <td className="border px-4 py-2">Ruby on Rails</td>
              <td className="border px-4 py-2">Laravel</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Frontend</td>
              <td className="border px-4 py-2">React</td>
              <td className="border px-4 py-2">Vue.js</td>
              <td className="border px-4 py-2">React</td>
              <td className="border px-4 py-2">React</td>
              <td className="border px-4 py-2">Vue.js</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Database</td>
              <td className="border px-4 py-2">Prisma</td>
              <td className="border px-4 py-2">Prisma/TypeORM</td>
              <td className="border px-4 py-2">Django ORM</td>
              <td className="border px-4 py-2">Active Record</td>
              <td className="border px-4 py-2">Eloquent ORM</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Authentication</td>
              <td className="border px-4 py-2">NextAuth.js</td>
              <td className="border px-4 py-2">Nuxt Auth</td>
              <td className="border px-4 py-2">Django Authentication</td>
              <td className="border px-4 py-2">Devise</td>
              <td className="border px-4 py-2">Laravel Sanctum</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Deployment</td>
              <td className="border px-4 py-2">Vercel</td>
              <td className="border px-4 py-2">Netlify/Vercel</td>
              <td className="border px-4 py-2">AWS</td>
              <td className="border px-4 py-2">Heroku</td>
              <td className="border px-4 py-2">Laravel Forge</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Stack Comparisons</h2>
          <p className="mb-4">Each of these stacks has its strengths and is well-suited for different types of projects and developer preferences:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong><Link href="/courses/nextjs" className="text-blue-600 hover:underline">Next.js Camp (NJ01FS)</Link></strong> is ideal for developers who want to build high-performance React applications with server-side rendering capabilities. It's particularly well-suited for content-heavy websites and e-commerce platforms.</li>
            <li><strong><Link href="/courses/nuxtjs" className="text-blue-600 hover:underline">Nuxt.js Camp (NU02FS)</Link></strong> is perfect for developers who want to leverage the Vue.js ecosystem with server-side rendering capabilities. It's great for building modern web applications with excellent developer experience.</li>
            <li><strong><Link href="/courses/django-react" className="text-blue-600 hover:underline">Django + React Camp (DJ03FS)</Link></strong> combines the power of Python backend with a React frontend, making it ideal for data-driven applications and projects requiring complex backend logic.</li>
            <li><strong><Link href="/courses/rails-react" className="text-blue-600 hover:underline">Ruby on Rails + React Camp (RR04FS)</Link></strong> is excellent for rapid application development, combining the convention-over-configuration philosophy of Rails with the flexibility of React.</li>
            <li><strong><Link href="/courses/laravel-vue" className="text-blue-600 hover:underline">Laravel + Vue.js Camp (LV05FS)</Link></strong> is perfect for developers who appreciate a batteries-included PHP framework combined with the progressive nature of Vue.js. It's great for building robust, scalable web applications.</li>
          </ul>
          <p className="mt-4">Choosing the right stack depends on your project requirements, team expertise, and career goals. All five stacks are in high demand and offer excellent career prospects in the current job market.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesComparisonPage;
