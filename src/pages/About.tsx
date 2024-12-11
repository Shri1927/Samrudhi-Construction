import React from 'react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Samruddhi Construction</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Samruddhi Construction is a leading innovator in sustainable construction and environmental management, 
              specializing in comprehensive rainwater harvesting solutions. Since our establishment, we have been 
              committed to designing and implementing effective systems that conserve water, reduce runoff, and 
              provide reliable water resources for communities and businesses.
            </p>
            <p className="text-gray-600">
              With a solid track record in environmental construction projects, we bring years of experience, 
              knowledge, and an unyielding commitment to sustainable development practices to every project.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5" 
              alt="Construction site" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Our Vision</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600">
              To be a leader in sustainable construction and water conservation, paving the way for eco-friendly 
              and water-efficient communities. We aim to support clients in their commitment to environmental 
              responsibility by providing innovative rainwater harvesting solutions that deliver long-term value 
              and environmental benefits.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to environmental preservation and sustainable practices in all our projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek innovative solutions to address water conservation challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of quality in all our work and customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;