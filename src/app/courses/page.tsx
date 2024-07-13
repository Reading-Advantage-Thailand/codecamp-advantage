import React from 'react';

const CoursesComparisonPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tech Stack Bootcamp Comparison</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Aspect</th>
              <th className="border px-4 py-2">Next.js 14 Camp</th>
              <th className="border px-4 py-2">T3 Stack Camp</th>
              <th className="border px-4 py-2">MERN Stack Camp</th>
              <th className="border px-4 py-2">Laravel Full-Stack Camp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-semibold">Duration</td>
              <td className="border px-4 py-2">71 days (14 weeks)</td>
              <td className="border px-4 py-2">75 days (15 weeks)</td>
              <td className="border px-4 py-2">91 days (18 weeks)</td>
              <td className="border px-4 py-2">84 days (17 weeks)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Core Technologies</td>
              <td className="border px-4 py-2">Next.js 14, React, TypeScript, GCP</td>
              <td className="border px-4 py-2">Next.js 14, React, TypeScript, Prisma, tRPC, Tailwind CSS, NextAuth.js, Supabase</td>
              <td className="border px-4 py-2">MongoDB, Express.js, React, Node.js, TypeScript</td>
              <td className="border px-4 py-2">PHP, Laravel, MySQL, Vue.js</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Backend</td>
              <td className="border px-4 py-2">Node.js, Serverless Functions</td>
              <td className="border px-4 py-2">Node.js, tRPC, Prisma</td>
              <td className="border px-4 py-2">Node.js, Express.js</td>
              <td className="border px-4 py-2">PHP, Laravel</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Frontend</td>
              <td className="border px-4 py-2">React</td>
              <td className="border px-4 py-2">React</td>
              <td className="border px-4 py-2">React</td>
              <td className="border px-4 py-2">Vue.js, Blade</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Database</td>
              <td className="border px-4 py-2">Cloud SQL, Firestore</td>
              <td className="border px-4 py-2">Supabase (PostgreSQL)</td>
              <td className="border px-4 py-2">MongoDB</td>
              <td className="border px-4 py-2">MySQL</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">API Development</td>
              <td className="border px-4 py-2">Next.js API Routes</td>
              <td className="border px-4 py-2">tRPC</td>
              <td className="border px-4 py-2">RESTful with Express</td>
              <td className="border px-4 py-2">Laravel API</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Authentication</td>
              <td className="border px-4 py-2">Firebase</td>
              <td className="border px-4 py-2">NextAuth.js, Supabase</td>
              <td className="border px-4 py-2">JWT</td>
              <td className="border px-4 py-2">Laravel Built-in, Sanctum</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Styling</td>
              <td className="border px-4 py-2">CSS Modules, Tailwind CSS</td>
              <td className="border px-4 py-2">Tailwind CSS</td>
              <td className="border px-4 py-2">CSS-in-JS, Sass</td>
              <td className="border px-4 py-2">Blade, CSS, Sass</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">State Management</td>
              <td className="border px-4 py-2">Context API, React Hooks</td>
              <td className="border px-4 py-2">Not specified (likely React Hooks)</td>
              <td className="border px-4 py-2">Redux</td>
              <td className="border px-4 py-2">Vue.js State Management</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Testing</td>
              <td className="border px-4 py-2">Jest, React Testing Library</td>
              <td className="border px-4 py-2">Jest, React Testing Library</td>
              <td className="border px-4 py-2">Jest, React Testing Library, Cypress</td>
              <td className="border px-4 py-2">PHPUnit, Vue Test Utils</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Deployment</td>
              <td className="border px-4 py-2">Google Cloud Platform</td>
              <td className="border px-4 py-2">Vercel</td>
              <td className="border px-4 py-2">AWS (EC2, S3, CloudFront)</td>
              <td className="border px-4 py-2">DigitalOcean, Laravel Forge</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">CI/CD</td>
              <td className="border px-4 py-2">GitHub Actions</td>
              <td className="border px-4 py-2">GitHub Actions</td>
              <td className="border px-4 py-2">GitHub Actions</td>
              <td className="border px-4 py-2">GitLab CI</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Popularity</td>
              <td className="border px-4 py-2">High</td>
              <td className="border px-4 py-2">Growing</td>
              <td className="border px-4 py-2">Very High</td>
              <td className="border px-4 py-2">High</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Stack Comparisons</h2>
        <p className="mb-4">Each of these stacks has its strengths and is well-suited for different types of projects and developer preferences:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Next.js 14 Camp</strong> is ideal for developers who want to build high-performance React applications with server-side rendering capabilities. It's particularly well-suited for content-heavy websites and e-commerce platforms.</li>
          <li><strong>T3 Stack Camp</strong> is perfect for developers who prioritize type safety and want a cohesive, opinionated full-stack framework. It's great for building modern web applications with excellent developer experience.</li>
          <li><strong>MERN Stack Camp</strong> offers a classic JavaScript-everywhere approach, making it a versatile choice for a wide range of web applications. It's particularly strong for building scalable single-page applications and real-time features.</li>
          <li><strong>Laravel Full-Stack Camp</strong> is excellent for developers who appreciate convention over configuration and want a batteries-included framework. It's particularly strong for rapid application development and building robust backend systems.</li>
        </ul>
        <p className="mt-4">Choosing the right stack depends on your project requirements, team expertise, and career goals. All four stacks are in high demand and offer excellent career prospects in the current job market.</p>
      </div>
    </div>
  );
};

export default CoursesComparisonPage;
