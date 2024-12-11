import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Client:</strong> {project.client}</p>
                  <p className="text-sm"><strong>Location:</strong> {project.location}</p>
                  <p className="text-sm"><strong>Length:</strong> {project.Length}</p>
                  <p className="text-sm"><strong>Impact:</strong> {project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;