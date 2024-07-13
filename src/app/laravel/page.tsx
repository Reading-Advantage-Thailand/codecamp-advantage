import React from 'react';
import Image from 'next/image';

const LaravelPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Laravel Full-Stack Development Bootcamp</h1>
      
      <div className="mb-8">
        <Image
          src="/laravel-logo.png"
          alt="Laravel Logo"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
        <p>
          This comprehensive bootcamp is designed to transform aspiring developers into proficient full-stack professionals, 
          specializing in the Laravel ecosystem. Through a blend of part-time instruction and hands-on projects, you'll gain 
          the skills to build robust, scalable web applications using PHP, Laravel, MySQL, and Vue.js.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Course Duration</h2>
        <ul className="list-disc pl-6">
          <li>Total length: 17 weeks (84 days)</li>
          <li>Daily commitment: 2-4 hours</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
        <ul className="list-disc pl-6">
          <li>Basic understanding of HTML and CSS</li>
          <li>Familiarity with programming concepts (any language)</li>
          <li>No prior experience with PHP or Laravel required</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
        <ul className="list-disc pl-6">
          <li>Master full-stack web development using Laravel and related technologies</li>
          <li>Develop proficiency in building RESTful APIs with Laravel</li>
          <li>Gain expertise in creating dynamic, responsive user interfaces with Vue.js</li>
          <li>Learn to design and manage MySQL databases for Laravel applications</li>
          <li>Understand and implement authentication and authorization in web applications</li>
          <li>Acquire skills in testing, deployment, and DevOps practices for Laravel projects</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Covered</h2>
        <ul className="list-disc pl-6">
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
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ol className="list-decimal pl-6">
          <li>Personal Blog System (Units 1-3)</li>
          <li>E-commerce Platform (Units 4-5)</li>
          <li>Task Management Application (Units 6-7)</li>
          <li>Social Media Analytics Dashboard (Units 8-10)</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Career Prospects</h2>
        <p>This course prepares you for roles such as:</p>
        <ul className="list-disc pl-6">
          <li>Full-Stack Laravel Developer</li>
          <li>PHP Backend Developer</li>
          <li>Laravel Specialist</li>
          <li>Vue.js Frontend Developer</li>
          <li>DevOps Engineer (with a focus on PHP technologies)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose This Course</h2>
        <ul className="list-disc pl-6">
          <li>Flexible, part-time schedule suitable for working professionals</li>
          <li>Comprehensive coverage of the Laravel ecosystem</li>
          <li>Project-based curriculum reflecting real-world scenarios</li>
          <li>Focus on both backend (Laravel) and frontend (Vue.js) development</li>
          <li>Emphasis on modern PHP practices and Laravel best practices</li>
        </ul>
      </section>
    </div>
  );
};

export default LaravelPage;
