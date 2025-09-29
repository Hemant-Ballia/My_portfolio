import { BlogPost } from '@/types';
import React from 'react';

export const blogPosts: BlogPost[] = [
  {
    title: 'How I Built Kishan Mitra',
    summary: 'A deep dive into the tech, design, and impact behind my farmer-first platform.',
    date: 'September 20, 2025',
    slug: 'kishan-mitra-case-study',
    image: '/assets/k-s-hh.png',
    category: 'Case Study',
    readTime: '5 min read',
    author: 'Hemant Chauhan',
    content: (
      <>
        <p className="lead">Kishan Mitra started as a simple idea: how can we use technology to empower farmers?</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">The Problem</h2>
        <p>The agricultural supply chain is often complex, leaving farmers with little control over pricing.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">The Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2 my-4">
          <li><strong>MongoDB:</strong> Flexible NoSQL database</li>
          <li><strong>Express.js:</strong> Lightweight backend framework</li>
          <li><strong>React.js:</strong> Interactive front-end</li>
          <li><strong>Node.js:</strong> Server-side runtime</li>
        </ul>
        <blockquote className="border-l-4 border-cyan-500 pl-4 italic my-6">
          "The MERN stack gave us speed and scalability to iterate fast."
        </blockquote>
        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p>Building Kishan Mitra was a powerful learning experience in tech and social impact.</p>
      </>
    )
  },
  // {
  //   title: 'My Journey into Full-Stack Development',
  //   summary: 'From HTML to React and Node—how I evolved as a developer at IIT Patna.',
  //   date: 'August 15, 2025',
  //   slug: 'fullstack-journey-iitp',
  //   image: '/assets/blog/code-journey.png',
  //   category: 'Personal',
  //   readTime: '6 min read',
  //   author: 'Hemant Chauhan',
  //   content: (
  //     <>
  //       <p className="lead">My journey began with a simple “View Page Source” in my browser.</p>
  //       <h2 className="text-2xl font-bold mt-8 mb-4">The Early Days</h2>
  //       <p>HTML and CSS taught me structure and design fundamentals.</p>
  //       <h2 className="text-2xl font-bold mt-8 mb-4">Discovering JavaScript & React</h2>
  //       <p>React changed how I build UIs—components and state were a game-changer.</p>
  //       <pre className="bg-gray-800 text-white p-4 rounded-lg my-6 overflow-x-auto">
  //         <code>{ `function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}` }</code>
  //       </pre>
  //       <h2 className="text-2xl font-bold mt-8 mb-4">Back-End with Node.js</h2>
  //       <p>Learning APIs and databases completed my full-stack journey.</p>
  //     </>
  //   )
  // }
];
