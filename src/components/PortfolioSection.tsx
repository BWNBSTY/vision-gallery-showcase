
import React, { useState } from 'react';
import { Project } from '@/types';
import { ChevronRight, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const initialProjects: Project[] = [
  {
    id: 'project1',
    title: 'MODERN WEB PRESENCE',
    description: 'A comprehensive branding project for a new tech startup, focusing on clean lines and modern aesthetics. The goal was to create a timeless identity that resonates with a forward-thinking audience. This project involved UI/UX design, front-end development, and brand strategy.',
    imageUrls: [
      '/lovable-uploads/2d4220c3-9be4-4a37-b4d3-2b8c21e0c85d.png',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'
    ],
  },
  {
    id: 'project2',
    title: 'TECH INNOVATION HUB',
    description: 'Designed and developed a scalable e-commerce platform with a focus on user experience and conversion optimization. Features include a custom CMS, payment gateway integration, and advanced analytics. The architecture was built for high traffic and reliability.',
    imageUrls: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80'
    ],
  },
  {
    id: 'project3',
    title: 'CREATIVE UI/UX SOLUTIONS',
    description: 'Crafted an intuitive and visually appealing user interface for a new productivity mobile application. Conducted extensive user research and iterative testing to refine the design, ensuring a seamless and engaging user journey across all devices.',
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 w-full">
      <div className="container mx-auto px-4">
        <header className="mb-12 md:mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-gray-400 mr-2" />
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Selected Works</h2>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore My Recent Projects</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="lg:w-2/5 space-y-6">
            <ul className="space-y-3">
              {initialProjects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => handleProjectSelect(project)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ease-in-out focus:outline-none group flex items-center justify-between border-2
                      ${selectedProject.id === project.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl transform scale-105 border-transparent'
                        : 'text-gray-700 hover:bg-white hover:shadow-lg border-gray-200 bg-white/50'
                      }`}
                  >
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300
                      ${selectedProject.id === project.id ? 'text-white' : 'text-gray-800 group-hover:text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <ChevronRight 
                      className={`h-6 w-6 transition-all duration-300 ease-in-out 
                        ${selectedProject.id === project.id ? 'text-white rotate-90' : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1'}`} 
                    />
                  </button>
                </li>
              ))}
            </ul>
            
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">{selectedProject.title}</h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg italic">
                  "{selectedProject.description}"
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-800">Portfolio Project</div>
                    <div className="text-sm text-gray-500">Creative Designer & Developer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-3/5">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Project Gallery</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProject.imageUrls.map((imageUrl, index) => (
                        <CarouselItem key={`${selectedProject.id}-${index}`}>
                          <Card className="border-0 shadow-lg overflow-hidden">
                            <CardContent className="p-0">
                              <div className="aspect-w-16 aspect-h-10 bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                  src={imageUrl}
                                  alt={`${selectedProject.title} - Image ${index + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
                    <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
                  </Carousel>
                  
                  <div className="flex justify-center mt-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      {selectedProject.imageUrls.length} Images in Gallery
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
