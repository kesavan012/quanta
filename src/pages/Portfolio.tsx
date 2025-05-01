
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=600&q=80",
      title: "Cloud Migration for Enterprise",
      category: "Cloud Solutions",
      client: "Global Finance Corp",
      year: "2023",
      description: "A comprehensive cloud migration project for a leading financial services company, moving their entire infrastructure to AWS for improved scalability and security."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=600&q=80",
      title: "Cybersecurity Implementation",
      category: "Security",
      client: "SecureTech Industries",
      year: "2023",
      description: "Implementation of a multi-layered cybersecurity solution for a technology manufacturer, protecting their intellectual property and sensitive customer data."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=600&q=80",
      title: "Custom CRM Development",
      category: "Software",
      client: "Retail Solutions Inc.",
      year: "2022",
      description: "Development of a bespoke customer relationship management system for a retail chain, integrating with their existing ERP and e-commerce platforms."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=600&q=80",
      title: "AI-Powered Analytics Platform",
      category: "Artificial Intelligence",
      client: "DataDrive Analytics",
      year: "2022",
      description: "Creation of an AI-powered analytics platform that helps businesses extract actionable insights from their data, increasing decision-making efficiency."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=600&q=80",
      title: "Digital Transformation Strategy",
      category: "Consulting",
      client: "Legacy Manufacturing Corp",
      year: "2021",
      description: "Development and implementation of a comprehensive digital transformation strategy for a traditional manufacturing company, modernizing their operations."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=600&q=80",
      title: "IoT Solution for Smart Facilities",
      category: "IoT",
      client: "Urban Properties LLC",
      year: "2021",
      description: "Implementation of an IoT solution for commercial real estate, enabling smart building management and significant energy savings."
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=600&h=600&q=80",
      title: "E-commerce Platform Migration",
      category: "Software",
      client: "Global Retail Brands",
      year: "2020",
      description: "Migration and enhancement of an e-commerce platform for a multinational retailer, improving performance, security, and user experience."
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&h=600&q=80",
      title: "Hybrid Cloud Architecture",
      category: "Cloud Solutions",
      client: "MediTech Innovations",
      year: "2020",
      description: "Design and implementation of a hybrid cloud architecture for a healthcare technology company, balancing security, compliance, and performance."
    },
  ];

  // Categories for filtering
  const allCategories = ["All", ...new Set(portfolioItems.map(item => item.category))];
  
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter items based on active category
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Work</span>
            <h1 className="heading-xl text-white mb-6">Portfolio</h1>
            <p className="text-xl text-gray-300">
              Explore our successful projects that showcase our expertise and the transformative impact of our solutions
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&h=800&q=80')] bg-cover bg-center"></div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-12">
            {allCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 m-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-quantum-red text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <PortfolioItem
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                link={`/portfolio/${item.id}`}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No projects found</h3>
              <p className="text-gray-600">
                No projects matching the selected category were found. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Projects Stats */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-quantum-red mb-4">250+</div>
              <p className="text-white text-xl">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-quantum-red mb-4">120+</div>
              <p className="text-white text-xl">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-quantum-red mb-4">15+</div>
              <p className="text-white text-xl">Industries Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-quantum-red mb-4">10+</div>
              <p className="text-white text-xl">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Clients</span>
            <h2 className="heading-lg mb-6">Trusted by Leading Organizations</h2>
            <p className="text-gray-600">
              We've had the pleasure of working with a diverse range of clients across various industries.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {/* These would normally be client logos, using placeholders */}
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center rounded">Client 1</div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center rounded">Client 2</div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center rounded">Client 3</div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center rounded">Client 4</div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center rounded">Client 5</div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center rounded">Client 6</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-quantum-red">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Let's collaborate on your next project and create solutions that drive exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="inline-block bg-white text-quantum-red px-8 py-4 rounded-md font-bold text-lg hover:bg-black hover:text-white transition-colors duration-300">
                Start a Project
              </a>
              <a href="/services" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-quantum-red transition-colors duration-300">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
