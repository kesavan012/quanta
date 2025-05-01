
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FlipCard from '../components/FlipCard';

const Services = () => {
  // All services data
  const allServices = [
    {
      id: "cloud",
      title: "Cloud Solutions",
      description: "Harness the power of cloud computing with our scalable, secure, and cost-effective solutions designed to enhance your business operations and drive digital transformation.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      linkTo: "/services/cloud",
      fullDesc: "Our cloud solutions provide businesses with the flexibility, scalability, and resilience needed in today's digital landscape. We help you migrate, optimize, and manage your infrastructure in the cloud, ensuring maximum performance and cost-efficiency. Our team specializes in AWS, Azure, and Google Cloud, delivering tailored solutions that align with your business goals."
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions that defend against threats, ensure compliance, and provide peace of mind in an increasingly connected world.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      linkTo: "/services/cybersecurity",
      fullDesc: "In an era of increasing cyber threats, our cybersecurity services provide robust protection for your critical systems and data. We offer comprehensive security assessments, threat monitoring, incident response, and compliance solutions. Our experts implement multi-layered security strategies that safeguard your business while enabling operational efficiency."
    },
    {
      id: "software",
      title: "Software Development",
      description: "From concept to deployment, our expert developers create custom software solutions that solve complex business problems, streamline operations, and deliver exceptional user experiences.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      linkTo: "/services/software",
      fullDesc: "Our software development team creates bespoke applications that address your unique business challenges. We follow industry best practices and agile methodologies to deliver high-quality, scalable, and maintainable software. From web and mobile apps to enterprise solutions, we bring your vision to life with cutting-edge technologies."
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      description: "Unlock new insights and opportunities with our AI and machine learning solutions that transform data into actionable intelligence, automate processes, and enhance decision-making.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      linkTo: "/services/ai",
      fullDesc: "Harness the power of artificial intelligence and machine learning to gain competitive advantage. Our AI solutions help you extract meaningful insights from your data, automate routine tasks, and make more informed business decisions. We develop custom AI models and algorithms tailored to your specific industry and business needs."
    },
    {
      id: "consulting",
      title: "IT Consulting",
      description: "Navigate the complex technology landscape with our strategic IT consulting services that provide expert guidance, roadmapping, and implementation support for your digital initiatives.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      ),
      linkTo: "/services/consulting",
      fullDesc: "Our IT consulting services provide strategic guidance to help you navigate the complex technology landscape. We assess your current IT infrastructure, identify areas for improvement, and develop comprehensive roadmaps that align technology investments with your business objectives. Our consultants bring decades of experience across various industries."
    },
    {
      id: "digital",
      title: "Digital Transformation",
      description: "Reimagine your business for the digital age with our comprehensive transformation services that integrate technology, process optimization, and organizational change management.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      ),
      linkTo: "/services/digital",
      fullDesc: "Digital transformation is more than just implementing new technologies—it's about fundamentally changing how your business operates and delivers value. Our holistic approach encompasses technology implementation, process optimization, and organizational change management to ensure successful adoption and maximum ROI."
    }
  ];

  // Parallax effect for sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Apply parallax to elements
      document.querySelectorAll('.parallax-element').forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0.1');
        (element as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Services</span>
            <h1 className="heading-xl text-white mb-6">Advanced IT Solutions for Modern Businesses</h1>
            <p className="text-xl text-gray-300">
              From cloud computing to cybersecurity, we deliver the technological edge your business needs to thrive
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&h=800&q=80')] bg-cover bg-center"></div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 parallax-element" data-speed="0.05">
              <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">What We Do</span>
              <h2 className="heading-lg mb-6">Comprehensive IT Services Tailored to Your Business</h2>
              <p className="text-gray-600 mb-6">
                At QuantumCraft Technology, we offer a wide range of IT services designed to meet the diverse needs of businesses across industries. Our solutions are built on cutting-edge technologies and industry best practices, ensuring that you receive the highest quality service.
              </p>
              <p className="text-gray-600">
                Whether you're looking to migrate to the cloud, enhance your cybersecurity posture, develop custom software, or embark on a digital transformation journey, our team of experts is here to guide you every step of the way. We take a collaborative approach, working closely with you to understand your unique requirements and deliver solutions that drive real business value.
              </p>
            </div>
            <div className="relative parallax-element" data-speed="0.08">
              <div className="aspect-square relative z-10 rounded-lg overflow-hidden shadow-xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=600&q=80" 
                  alt="IT Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-full h-full bg-quantum-red rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section id="all-services" className="py-20 bg-quantum-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Offerings</span>
            <h2 className="heading-lg mb-6">Explore Our Services</h2>
            <p className="text-gray-600">
              Each of our services is designed to address specific business challenges and opportunities in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index}>
                <FlipCard
                  title={service.title}
                  icon={service.icon}
                  description={service.fullDesc}
                  linkTo={`/services/${service.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Advantages</span>
            <h2 className="heading-lg text-white mb-6">Why Choose QuantumCraft?</h2>
            <p className="text-gray-400">
              We set ourselves apart through our commitment to excellence, innovation, and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-quantum-darkgray p-8 rounded-lg">
              <div className="text-quantum-red text-4xl mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Expert Team</h3>
              <p className="text-gray-400">
                Our team consists of highly skilled professionals with extensive experience across various IT domains. We stay up-to-date with the latest technologies and industry trends.
              </p>
            </div>
            
            <div className="bg-quantum-darkgray p-8 rounded-lg">
              <div className="text-quantum-red text-4xl mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Client-Centric Approach</h3>
              <p className="text-gray-400">
                We prioritize understanding your business goals and challenges, ensuring that our IT solutions are tailored to your specific needs and deliver tangible results.
              </p>
            </div>
            
            <div className="bg-quantum-darkgray p-8 rounded-lg">
              <div className="text-quantum-red text-4xl mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Proven Results</h3>
              <p className="text-gray-400">
                Our track record speaks for itself. We've helped numerous businesses achieve their IT objectives, from enhancing operational efficiency to driving innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Methodology</span>
            <h2 className="heading-lg mb-6">Our Service Delivery Process</h2>
            <p className="text-gray-600">
              We follow a structured approach to ensure consistent, high-quality results for every project.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-quantum-red transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-6 h-6 bg-quantum-red rounded-full transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right pr-8">
                    <h3 className="text-2xl font-bold mb-4">Initial Consultation</h3>
                    <p className="text-gray-600">
                      We begin with a thorough discussion to understand your business goals, challenges, and requirements. This helps us identify the most suitable solutions for your needs.
                    </p>
                  </div>
                  <div className="pl-8">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80" 
                      alt="Consultation" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-6 h-6 bg-quantum-red rounded-full transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left pl-8">
                    <h3 className="text-2xl font-bold mb-4">Assessment & Strategy</h3>
                    <p className="text-gray-600">
                      Our experts evaluate your current IT infrastructure, processes, and capabilities. Based on this assessment, we develop a comprehensive strategy and roadmap for implementation.
                    </p>
                  </div>
                  <div className="md:order-1 pr-8">
                    <img 
                      src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&h=400&q=80" 
                      alt="Strategy" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-6 h-6 bg-quantum-red rounded-full transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right pr-8">
                    <h3 className="text-2xl font-bold mb-4">Implementation</h3>
                    <p className="text-gray-600">
                      We execute the agreed-upon strategy with precision and attention to detail. Our team works diligently to ensure smooth implementation with minimal disruption to your operations.
                    </p>
                  </div>
                  <div className="pl-8">
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400&q=80" 
                      alt="Implementation" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-6 h-6 bg-quantum-red rounded-full transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left pl-8">
                    <h3 className="text-2xl font-bold mb-4">Continuous Support & Optimization</h3>
                    <p className="text-gray-600">
                      Our commitment doesn't end with implementation. We provide ongoing support, monitoring, and optimization to ensure your solutions continue to perform optimally and evolve with your business.
                    </p>
                  </div>
                  <div className="md:order-1 pr-8">
                    <img 
                      src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=600&h=400&q=80" 
                      alt="Support" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-quantum-red">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">Ready to Transform Your Business with QuantumCraft?</h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Contact us today to discuss how our IT services can help you achieve your business goals.
            </p>
            <Link to="/contact" className="inline-block bg-white text-quantum-red px-8 py-4 rounded-md font-bold text-lg hover:bg-black hover:text-white transition-colors duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
