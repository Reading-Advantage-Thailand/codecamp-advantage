import CourseSection from '../../../components/CourseSection';
import CourseLayout from '../../../components/CourseLayout';

export const metadata = {
  title: 'MERN Stack Development Bootcamp - Codecamp Advantage',
  description: 'Master MERN stack development with our intensive bootcamp',
}

export default function MERNCoursePage() {
  return (
    <CourseLayout title="MERN Stack Development Bootcamp">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseSection title="Course Overview">
          <p className="text-gray-700">
            This intensive bootcamp is designed to transform beginners into proficient full-stack developers, 
            specializing in the MERN (MongoDB, Express.js, React, Node.js) stack. Through hands-on projects 
            and comprehensive instruction, you'll gain the skills to build modern, scalable web applications 
            using JavaScript throughout the entire development stack.
          </p>
        </CourseSection>

        <CourseSection title="Course Details">
          <ul className="list-disc list-inside text-gray-700">
            <li>Duration: 18 weeks (91 days)</li>
            <li>Daily commitment: 8 hours</li>
            <li>Prerequisites: Basic understanding of HTML, CSS, and JavaScript</li>
          </ul>
        </CourseSection>

        <CourseSection title="Learning Objectives">
          <ul className="list-disc list-inside text-gray-700">
            <li>Master full-stack JavaScript development using the MERN stack</li>
            <li>Develop proficiency in building RESTful APIs with Node.js and Express.js</li>
            <li>Gain expertise in creating dynamic, responsive user interfaces with React</li>
            <li>Learn to design and manage MongoDB databases for scalable applications</li>
            <li>Understand and implement authentication and authorization in web applications</li>
            <li>Acquire skills in testing, deployment, and DevOps practices for MERN applications</li>
          </ul>
        </CourseSection>

        <CourseSection title="Technologies Covered">
          <ul className="list-disc list-inside text-gray-700">
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Redux</li>
            <li>Jest and React Testing Library</li>
            <li>Docker</li>
            <li>AWS (EC2, S3, CloudFront)</li>
            <li>Git and GitHub</li>
          </ul>
        </CourseSection>

        <CourseSection title="Projects">
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal Task Manager</li>
            <li>E-commerce Platform</li>
            <li>Social Media Dashboard</li>
            <li>Real-Time Collaborative Workspace</li>
          </ul>
        </CourseSection>

        <CourseSection title="Career Prospects">
          <p className="text-gray-700 mb-2">This course prepares you for roles such as:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Full-Stack JavaScript Developer</li>
            <li>MERN Stack Developer</li>
            <li>Frontend React Developer</li>
            <li>Node.js Backend Developer</li>
            <li>DevOps Engineer (with a focus on JavaScript technologies)</li>
          </ul>
        </CourseSection>
      </div>

      <CourseSection title="How to Enroll">
        <p className="text-gray-700">
          Visit our website to fill out the application form. Our admissions team will contact you 
          to schedule an interview and provide next steps.
        </p>
      </CourseSection>
    </CourseLayout>
  )
}
