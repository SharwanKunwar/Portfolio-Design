'use client';
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is the first project description.',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is the second project description.',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is the third project description.',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is the fourth project description.',
  },
];

function Page() {
  return (
    <div className="w-full p-5 bg-neutral-500 flex flex-col gap-5">
      {/* Title */}
      <div className="bg-white w-full h-[40px] flex justify-start text-2xl items-center px-4">
        <h1>All Projects</h1>
      </div>

      {/* Description */}
      <div>
        <p>
          Here are some of the projects I've worked on. Each one demonstrates my
          skills in development and design.
        </p>
      </div>

      {/* Projects */}
      <div className="bg-red-400 flex w-full flex-wrap gap-5 justify-center items-center p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white w-[45%] h-[300px] p-4 rounded shadow-md flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
