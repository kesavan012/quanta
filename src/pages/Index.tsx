
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticlesEffect from '../components/ParticlesEffect';
import FlipCard from '../components/FlipCard';
import PortfolioItem from '../components/PortfolioItem';
import TestimonialCard from '../components/TestimonialCard';

const Index = () => {
  // Services Data
  const services = [
    {
      title: "Cloud Solutions",
      description: "Harness the power of cloud computing with our scalable, secure, and cost-effective solutions designed to enhance your business operations and drive digital transformation.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      linkTo: "/services#cloud"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions that defend against threats, ensure compliance, and provide peace of mind in an increasingly connected world.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      linkTo: "/services#cybersecurity"
    },
    {
      title: "Software Development",
      description: "From concept to deployment, our expert developers create custom software solutions that solve complex business problems, streamline operations, and deliver exceptional user experiences.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      linkTo: "/services#software"
    }
  ];

  // Portfolio Data
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=600&q=80",
      title: "Cloud Migration for Enterprise",
      category: "Cloud Solutions",
      link: "/portfolio/1"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=600&q=80",
      title: "Cybersecurity Implementation",
      category: "Security",
      link: "/portfolio/2"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=600&q=80",
      title: "Custom CRM Development",
      category: "Software",
      link: "/portfolio/3"
    },
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=600&q=80",
      title: "AI-Powered Analytics Platform",
      category: "Artificial Intelligence",
      link: "/portfolio/4"
    }
  ];

  // Testimonial Data
  const testimonials = [
    {
      quote: "QuantumCraft transformed our IT infrastructure, resulting in a 40% increase in operational efficiency and significant cost savings. Their expertise and dedication to our success were evident throughout the project.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechGlobal Inc.",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      quote: "The cybersecurity solution implemented by QuantumCraft has given us complete peace of mind. Their team's proactive approach and technical knowledge are unmatched in the industry.",
      name: "Michael Chen",
      title: "IT Director",
      company: "Secure Systems Ltd.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Working with QuantumCraft on our software development project exceeded our expectations. They delivered a robust solution that perfectly aligned with our business requirements, on time and within budget.",
      name: "Emma Rodriguez",
      title: "Product Manager",
      company: "Innovation Apps",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  // Parallax effect for sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // About section parallax
      const aboutSection = document.querySelector('.about-section');
      if (aboutSection) {
        const aboutBg = aboutSection.querySelector('.about-bg');
        if (aboutBg) {
          (aboutBg as HTMLElement).style.transform = `translateY(${scrollY * 0.1}px)`;
        }
      }
      
      // Apply parallax to other elements as needed
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <ParticlesEffect />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Quantum<span className="text-quantum-red">Craft</span> Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Pioneering IT solutions that transform businesses through innovation
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services" className="btn-primary">
                Our Services
              </Link>
              <Link to="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a href="#about" className="text-white animate-bounce">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden about-section">
        <div className="absolute inset-0 about-bg opacity-5 z-0">
          <div className="w-full h-full bg-gradient-to-br from-quantum-red to-black"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="parallax-element" data-speed="0.05">
              <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">About Us</span>
              <h2 className="heading-lg mb-6">Innovative IT Solutions for the Digital Age</h2>
              <p className="text-gray-600 mb-6">
                At QuantumCraft Technology, we're not just another IT service provider. We're pioneers in the digital transformation space, leveraging cutting-edge technologies to solve complex business challenges and drive unprecedented growth for our clients.
              </p>
              <p className="text-gray-600 mb-6">
                Founded by a team of industry veterans with a passion for innovation, our mission is to democratize access to advanced IT solutions that were once available only to large enterprises, making them accessible to businesses of all sizes.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-quantum-red mb-2">10+</div>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-quantum-red mb-2">250+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-quantum-red mb-2">50+</div>
                  <p className="text-gray-600">IT Professionals</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-quantum-red mb-2">99%</div>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative parallax-element" data-speed="0.08">
              <div className="aspect-square relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=800&q=80" 
                  alt="QuantumCraft Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-xl z-0">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=600&q=80" 
                  alt="Tech Background" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-20 flex items-center justify-center bg-quantum-red rounded-full shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">What We Offer</span>
            <h2 className="heading-lg text-white mb-6">Our Services</h2>
            <p className="text-gray-400">
              We provide a comprehensive suite of IT services designed to help businesses navigate the complexities of the digital landscape and achieve their strategic objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FlipCard
                key={index}
                title={service.title}
                icon={service.icon}
                description={service.description}
                linkTo={service.linkTo}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* IT Service Diagram */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Process</span>
            <h2 className="heading-lg mb-6">How We Deliver Excellence</h2>
            <p className="text-gray-600">
              Our proven methodology ensures consistent, high-quality results across all our services, from initial consultation to ongoing support.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-quantum-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-2xl font-bold mb-4">Discovery & Analysis</h3>
                <p className="text-gray-600">We begin by thoroughly understanding your business needs, challenges, and objectives through in-depth consultations and analysis.</p>
              </div>
              <div className="text-center md:mt-32">
                <div className="w-20 h-20 bg-quantum-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-2xl font-bold mb-4">Strategy & Planning</h3>
                <p className="text-gray-600">Our experts develop a comprehensive strategy and detailed project plan tailored to your specific requirements and constraints.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-quantum-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-2xl font-bold mb-4">Implementation</h3>
                <p className="text-gray-600">We execute the plan with precision, leveraging our expertise and cutting-edge technologies to deliver high-quality solutions.</p>
              </div>
              <div className="text-center md:mt-32">
                <div className="w-20 h-20 bg-quantum-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-2xl font-bold mb-4">Optimization & Support</h3>
                <p className="text-gray-600">We provide ongoing optimization, maintenance, and support to ensure your solution continues to perform optimally and evolve with your business.</p>
              </div>
            </div>
            
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-1 bg-quantum-red hidden md:block"></div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-quantum-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Work</span>
            <h2 className="heading-lg mb-6">Featured Projects</h2>
            <p className="text-gray-600">
              Explore our portfolio of successful projects that showcase our expertise and the transformative impact of our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                image={item.image}
                title={item.title}
                category={item.category}
                link={item.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-quantum-darkgray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Testimonials</span>
            <h2 className="heading-lg text-white mb-6">What Our Clients Say</h2>
            <p className="text-gray-400">
              Don't just take our word for it. See what our clients have to say about their experience working with QuantumCraft Technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Contact Us</span>
              <h2 className="heading-lg mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking to start a new project, need advice on your IT strategy, or have questions about our services, we're here to help. Reach out to us using the form below.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-quantum-red h-12 w-12 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-gray-600">123 Tech Avenue, Silicon Valley, CA 94043</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-quantum-red h-12 w-12 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-quantum-red h-12 w-12 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">info@quantumcraft.tech</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-quantum-red h-12 w-12 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-quantum-red focus:border-quantum-red"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-quantum-red focus:border-quantum-red"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-quantum-red focus:border-quantum-red"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-quantum-red focus:border-quantum-red"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
