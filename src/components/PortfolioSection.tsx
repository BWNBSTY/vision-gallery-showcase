
import React, { useState } from 'react';
import { Project } from '@/types';
import { ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const initialProjects: Project[] = [
  {
    id: 'project1',
    title: 'MODERN WEB PRESENCE',
    description: 'A comprehensive branding project for a new tech startup, focusing on clean lines and modern aesthetics. The goal was to create a timeless identity that resonates with a forward-thinking audience.',
    imageUrls: [
      '/lovable-uploads/2d4220c3-9be4-4a37-b4d3-2b8c21e0c85d.png',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'
    ],
  },
  {
    id: 'project2',
    title: 'TECH INNOVATION HUB',
    description: 'Designed and developed a scalable e-commerce platform with a focus on user experience and conversion optimization. Features include a custom CMS and payment gateway integration.',
    imageUrls: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80'
    ],
  },
  {
    id: 'project3',
    title: 'CREATIVE UI/UX SOLUTIONS',
    description: 'Crafted an intuitive and visually appealing user interface for a new productivity mobile application. Conducted extensive user research and iterative testing to refine the design.',
    imageUrls: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80'
    ],
  },
];

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(initialProjects[0]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/50 to-slate-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <header className="mb-12 md:mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-purple-400 mr-2" />
            <h2 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Selected Works</h2>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">Explore My Recent Projects</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Project Selection */}
          <div className="lg:w-2/5 space-y-6">
            <ul className="space-y-3">
              {initialProjects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => handleProjectSelect(project)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ease-in-out focus:outline-none group flex items-center justify-between border backdrop-blur-sm
                      ${selectedProject.id === project.id
                        ? 'bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white shadow-2xl transform scale-105 border-purple-400/50'
                        : 'text-gray-300 hover:bg-white/10 hover:shadow-lg border-gray-600/30 bg-white/5'
                      }`}
                  >
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300
                      ${selectedProject.id === project.id ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                      {project.title}
                    </h3>
                    <ChevronRight 
                      className={`h-6 w-6 transition-all duration-300 ease-in-out 
                        ${selectedProject.id === project.id ? 'text-white rotate-90' : 'text-gray-400 group-hover:text-gray-300 group-hover:translate-x-1'}`} 
                    />
                  </button>
                </li>
              ))}
            </ul>
            
            <Card className="shadow-xl border-0 bg-white/10 backdrop-blur-md border-gray-600/30">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-4"></div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg italic">
                  "{selectedProject.description}"
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">Portfolio Project</div>
                    <div className="text-sm text-gray-400">Creative Designer & Developer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial-style Image Gallery */}
          <div className="lg:w-3/5 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Project Gallery</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            {/* Glass Cards Stack */}
            <div className="relative h-[500px] perspective-1000">
              {selectedProject.imageUrls.map((imageUrl, index) => (
                <div
                  key={`${selectedProject.id}-${index}`}
                  className={`absolute inset-0 transition-all duration-700 ease-out transform-gpu`}
                  style={{
                    transform: `translateX(${index * 30}px) translateY(${index * 20}px) rotateY(${index * 5}deg)`,
                    zIndex: selectedProject.imageUrls.length - index,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <Card className="w-full h-full border-0 bg-white/10 backdrop-blur-lg border-gray-400/20 shadow-2xl overflow-hidden">
                    <CardContent className="p-0 h-full relative">
                      {/* Circular Avatar */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                          <img
                            src={imageUrl}
                            alt={`${selectedProject.title} - ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-36 pb-8 px-8 text-center h-full flex flex-col justify-between">
                        <div>
                          <Quote className="h-8 w-8 text-purple-300 mx-auto mb-4" />
                          <p className="text-gray-200 text-lg leading-relaxed italic mb-6">
                            "{selectedProject.description}"
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">
                            {selectedProject.title}
                          </h4>
                          <p className="text-purple-300 text-sm">
                            Project {index + 1} of {selectedProject.imageUrls.length}
                          </p>
                        </div>
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/20 pointer-events-none"></div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {selectedProject.imageUrls.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-colors duration-200"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
