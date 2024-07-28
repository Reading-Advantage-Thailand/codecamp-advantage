import CourseSection from '../../../components/CourseSection';
import CourseLayout from '../../../components/CourseLayout';

export const metadata = {
  title: 'Laravel + Vue.js Full-Stack Development Codecamp - Codecamp Advantage',
  description: 'Master Laravel, Vue.js, PHP, and full-stack development with our intensive 13-week bootcamp',
}

export default function LaravelVueJSCoursePage() {
  return (
    <CourseLayout title="Laravel + Vue.js Full-Stack Development Codecamp">
      <img src="/laravel-vue-logo.png" alt="Laravel + Vue.js Logo" className="mx-auto mb-8 max-w-xs" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This intensive 13-week bootcamp is designed to transform beginners into proficient full-stack developers, 
            specializing in the Laravel and Vue.js ecosystem. The course covers Laravel, Vue.js, PHP, and related technologies. 
            Students will work on five progressive projects throughout the course, each integrated with the units to 
            provide hands-on application of learned skills.
          </p>
        </CourseSection>

        <CourseSection title="Course Details">
          <ul className="list-disc list-inside text-gray-700">
            <li>Total length: 13 weeks</li>
            <li>5 integrated projects</li>
            <li>Comprehensive curriculum covering full-stack development</li>
          </ul>
        </CourseSection>

        <CourseSection title="Learning Objectives">
          <ul className="list-disc list-inside text-gray-700">
            <li>Build full-stack applications using Laravel and Vue.js</li>
            <li>Write efficient and maintainable PHP code</li>
            <li>Implement server-side rendering and API development with Laravel</li>
            <li>Design and develop RESTful APIs using Laravel API</li>
            <li>Integrate and query databases using MySQL and Eloquent ORM</li>
            <li>Implement authentication and authorization in Laravel applications</li>
            <li>Write and run various types of tests for both frontend and backend</li>
            <li>Deploy and maintain Laravel applications on DigitalOcean</li>
            <li>Optimize Laravel and Vue.js applications for performance</li>
            <li>Develop internationalized and accessible web applications</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
          <ul className="list-disc list-inside text-gray-700">
            <li>Laravel</li>
            <li>Vue.js</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Eloquent ORM</li>
            <li>Laravel Sanctum</li>
            <li>Tailwind CSS</li>
            <li>PHPUnit and Jest</li>
            <li>Cypress</li>
            <li>DigitalOcean</li>
          </ul>
        </CourseSection>

        <CourseSection title="Projects">
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal Portfolio</li>
            <li>Blog Application</li>
            <li>E-commerce Platform</li>
            <li>Task Management Application</li>
            <li>Social Media Dashboard (Capstone Project)</li>
          </ul>
        </CourseSection>

        <CourseSection title="Course Structure">
          <p className="text-gray-700 mb-2">The bootcamp is divided into 13 units:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Development Environment Setup</li>
            <li>HTML and CSS Fundamentals</li>
            <li>JavaScript Fundamentals</li>
            <li>PHP Fundamentals</li>
            <li>Laravel Fundamentals</li>
            <li>Vue.js Fundamentals</li>
            <li>Database Design and Integration</li>
            <li>Authentication and Authorization with Laravel Sanctum</li>
            <li>API Development with Laravel</li>
            <li>Testing and Quality Assurance</li>
            <li>DevOps and Deployment with DigitalOcean</li>
            <li>Performance Optimization</li>
            <li>Advanced Laravel and Vue.js Concepts</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="Why Choose This Course">
        <ul className="list-disc list-inside text-gray-700">
          <li>Comprehensive curriculum covering the entire Laravel and Vue.js ecosystem</li>
          <li>Hands-on experience with five integrated projects</li>
          <li>Focus on practical, real-world development scenarios</li>
          <li>Learn best practices for modern web development</li>
          <li>Prepare for a successful career in full-stack development</li>
        </ul>
      </CourseSection>

      <CourseSection title="Career Prospects">
        <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Full-Stack Laravel Developer</li>
          <li>Vue.js Specialist</li>
          <li>PHP Backend Developer</li>
          <li>Laravel API Developer</li>
          <li>DevOps Engineer (specializing in Laravel deployments)</li>
        </ul>
      </CourseSection>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to discuss your goals and provide next steps. Get ready to embark on an exciting journey 
          into the world of Laravel and Vue.js full-stack development!
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
