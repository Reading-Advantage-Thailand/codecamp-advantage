import CourseSection from '../../../components/CourseSection';
import CourseLayout from '../../../components/CourseLayout';

export const metadata = {
  title: 'Laravel Full-Stack Development Bootcamp - Codecamp Advantage',
  description: 'Master Laravel full-stack development with our intensive bootcamp',
}

export default function LaravelCoursePage() {
  return (
    <CourseLayout title="Laravel Full-Stack Development Bootcamp">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="main" aria-label="Course Information">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This comprehensive bootcamp is designed to transform aspiring developers into proficient full-stack professionals, 
            specializing in the Laravel ecosystem. Through a blend of part-time instruction and hands-on projects, you'll gain 
            the skills to build robust, scalable web applications using PHP, Laravel, MySQL, and Vue.js.
          </p>
        </CourseSection>

        <CourseSection title="Course Details">
          <ul className="list-disc list-inside text-gray-700">
            <li>Duration: 17 weeks (84 days)</li>
            <li>Daily commitment: 2-4 hours</li>
            <li>Prerequisites: Basic understanding of HTML and CSS, familiarity with programming concepts</li>
          </ul>
        </CourseSection>

        <CourseSection title="Learning Objectives">
          <ul className="list-disc list-inside text-gray-700">
            <li>Master full-stack web development using Laravel and related technologies</li>
            <li>Develop proficiency in building RESTful APIs with Laravel</li>
            <li>Gain expertise in creating dynamic, responsive user interfaces with Vue.js</li>
            <li>Learn to design and manage MySQL databases for Laravel applications</li>
            <li>Understand and implement authentication and authorization in web applications</li>
            <li>Acquire skills in testing, deployment, and DevOps practices for Laravel projects</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
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
        </CourseSection>

        <CourseSection title="Projects">
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal Blog System</li>
            <li>E-commerce Platform</li>
            <li>Task Management Application</li>
            <li>Social Media Analytics Dashboard</li>
          </ul>
        </CourseSection>

        <CourseSection title="Career Prospects">
          <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Full-Stack Laravel Developer</li>
            <li>PHP Backend Developer</li>
            <li>Laravel Specialist</li>
            <li>Vue.js Frontend Developer</li>
            <li>DevOps Engineer (with a focus on PHP technologies)</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to discuss your goals and provide next steps.
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
