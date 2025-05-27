
import React, { useState } from 'react';
import { Project } from '@/types'; // Importing the Project type

const initialProjects: Project[] = [
  {
    id: 'project1',
    title: 'MODERN WEB PRESENCE',
    description: 'A comprehensive branding project for a new tech startup, focusing on clean lines and modern aesthetics. The goal was to create a timeless identity that resonates with a forward-thinking audience. This project involved UI/UX design, front-end development, and brand strategy.',
    imageUrl: '/lovable-uploads/2d4220c3-9be4-4a37-b4d3-2b8c21e0c85d.png', // User uploaded image
  },
  {
    id: 'project2',
    title: 'TECH INNOVATION HUB',
    description: 'Designed and developed a scalable e-commerce platform with a focus on user experience and conversion optimization. Features include a custom CMS, payment gateway integration, and advanced analytics. The architecture was built for high traffic and reliability.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'project3',
    title: 'CREATIVE UI/UX SOLUTIONS',
    description: 'Crafted an intuitive and visually appealing user interface for a new productivity mobile application. Conducted extensive user research and iterative testing to refine the design, ensuring a seamless and engaging user journey across all devices.',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80',
  },
];

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(initialProjects[0]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <header className="mb-12 md:mb-16 text-left">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Selected Works</h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-800">Explore My Recent Projects</p>
        </header>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column: Project Titles and Description */}
          <div className="md:w-2/5 space-y-8">
            <ul className="space-y-1">
              {initialProjects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => handleProjectSelect(project)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ease-in-out focus:outline-none group
                      ${selectedProject.id === project.id
                        ? 'bg-black text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:bg-gray-200 hover:text-black'
                      }`}
                  >
                    <h3 className={`text-2xl md:text-3xl font-bold group-hover:text-black 
                      ${selectedProject.id === project.id ? 'text-white' : 'text-gray-800'}`}>
                      {project.title}
                    </h3>
                  </button>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-white rounded-lg shadow-md min-h-[150px] animate-fade-in">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">About This Project</h4>
              <p className="text-gray-600 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>

          {/* Right Column: Project Image */}
          <div className="md:w-3/5">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg shadow-xl overflow-hidden">
              {selectedProject.imageUrl && (
                <img
                  key={selectedProject.id} // Ensures image re-renders on change for animations
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover animate-fade-in"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
