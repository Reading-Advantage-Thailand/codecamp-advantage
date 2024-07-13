import CourseLayout from '../../components/CourseLayout';
import CourseSection from '../../components/CourseSection';

export const metadata = {
  title: 'Next.js 14 with React, TypeScript, and GCP Development Camp - Codecamp Advantage',
  description: 'Master Next.js 14, React, TypeScript, and GCP development with our intensive bootcamp',
}

export default function NextJSCoursePage() {
  return (
    <CourseLayout title="Next.js 14 with React, TypeScript, and GCP Development Camp">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This innovative bootcamp is designed to transform aspiring developers into skilled full-stack professionals, 
            specializing in Next.js 14, React, TypeScript, and Google Cloud Platform (GCP). Through a combination of 
            part-time instruction and hands-on projects, you'll gain the expertise to build high-performance, 
            server-side rendered React applications and deploy them on a robust cloud infrastructure.
          </p>
        </CourseSection>

        <CourseSection title="Course Details">
          <ul className="list-disc list-inside text-gray-700">
            <li>Total length: 14 weeks (71 days)</li>
            <li>Daily commitment: 2-4 hours</li>
            <li>Prerequisites: Basic understanding of HTML, CSS, and JavaScript</li>
          </ul>
        </CourseSection>

        <CourseSection title="Learning Objectives">
          <ul className="list-disc list-inside text-gray-700">
            <li>Master full-stack development using Next.js 14, React, and TypeScript</li>
            <li>Develop proficiency in server-side rendering and static site generation</li>
            <li>Gain expertise in building and consuming APIs with Next.js</li>
            <li>Learn to leverage TypeScript for enhanced code quality and developer experience</li>
            <li>Understand and implement authentication and authorization in Next.js applications</li>
            <li>Acquire skills in deploying and managing applications on Google Cloud Platform</li>
            <li>Learn to integrate AI capabilities into web applications</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
          <ul className="list-disc list-inside text-gray-700">
            <li>Next.js 14</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Firebase</li>
            <li>CSS Modules</li>
            <li>Tailwind CSS</li>
            <li>Jest and React Testing Library</li>
            <li>Git and GitHub</li>
          </ul>
        </CourseSection>

        <CourseSection title="Projects">
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal Blog Application</li>
            <li>E-commerce Platform</li>
            <li>Social Media Dashboard with Authentication</li>
            <li>AI-Enhanced Content Management System (CMS)</li>
          </ul>
        </CourseSection>

        <CourseSection title="Career Prospects">
          <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Full-Stack Next.js Developer</li>
            <li>React Specialist</li>
            <li>TypeScript Frontend Developer</li>
            <li>Cloud-Native Application Developer</li>
            <li>JAMstack Developer</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="Why Choose This Course">
        <ul className="list-disc list-inside text-gray-700">
          <li>Flexible, part-time schedule suitable for working professionals</li>
          <li>Comprehensive curriculum covering frontend, backend, and cloud deployment</li>
          <li>Focus on server-side rendering and static site generation with Next.js</li>
          <li>Integration of AI capabilities for cutting-edge web applications</li>
          <li>Hands-on experience with Google Cloud Platform for scalable deployments</li>
        </ul>
      </CourseSection>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to discuss your goals and provide next steps.
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
