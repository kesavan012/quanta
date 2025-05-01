
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
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
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">About Us</span>
            <h1 className="heading-xl text-white mb-6">Innovation is Our Tradition</h1>
            <p className="text-xl text-gray-300">
              Discover the story, mission, and values that drive QuantumCraft Technology
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&h=800&q=80')] bg-cover bg-center"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 parallax-element" data-speed="0.05">
              <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Story</span>
              <h2 className="heading-lg mb-6">Born from Innovation, Built for Tomorrow</h2>
              <p className="text-gray-600 mb-6">
                QuantumCraft Technology was founded in 2012 by a group of visionary technologists who recognized a gap in the IT service industry - a lack of providers who could combine cutting-edge technological expertise with a genuine understanding of business needs.
              </p>
              <p className="text-gray-600 mb-6">
                What began as a small team of passionate experts has grown into a comprehensive IT solutions provider with a global client base. Throughout our journey, we've maintained our founding principle: using technology to solve real business problems, not just implementing technology for its own sake.
              </p>
              <p className="text-gray-600">
                Today, QuantumCraft stands at the forefront of the digital transformation revolution, helping businesses of all sizes harness the power of emerging technologies to drive growth, increase efficiency, and gain competitive advantage.
              </p>
            </div>
            <div className="order-1 md:order-2 relative parallax-element" data-speed="0.08">
              <div className="aspect-video relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&h=500&q=80" 
                  alt="QuantumCraft History" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 bg-quantum-red rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-quantum-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Purpose</span>
            <h2 className="heading-lg mb-6">Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg parallax-element" data-speed="0.05">
              <div className="bg-quantum-red w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize access to cutting-edge IT solutions by delivering innovative, scalable, and cost-effective services that empower businesses to achieve their full potential in the digital age.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg parallax-element" data-speed="0.08">
              <div className="bg-quantum-red w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the catalyst for a technology-enabled future where businesses of all sizes can leverage advanced IT solutions to solve complex challenges, drive innovation, and create sustainable value for their stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">What We Believe</span>
            <h2 className="heading-lg text-white mb-6">Our Core Values</h2>
            <p className="text-gray-400">
              These principles guide everything we do, from how we develop solutions to how we interact with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-quantum-darkgray p-8 rounded-lg">
              <div className="text-quantum-red text-4xl mb-4">01</div>
              <h3 className="text-white text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">
                We constantly explore new technologies and approaches to deliver the best possible solutions for our clients.
              </p>
            </div>
            
            <div className="bg-quantum-darkgray p-8 rounded-lg">
              <div className="text-quantum-red text-4xl mb-4">02</div>
              <h3 className="text-white text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-400">
                We hold ourselves to the highest standards in everything we do, never compromising on quality or performance.
              </p>
            </div>
            
            <div className="bg-quantum-darkgray p-8 rounded-lg">
              <div className="text-quantum-red text-4xl mb-4">03</div>
              <h3 className="text-white text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-400">
                We act with honesty and transparency, building trust through ethical business practices and keeping our promises.
              </p>
            </div>
            
            <div className="bg-quantum-darkgray p-8 rounded-lg">
              <div className="text-quantum-red text-4xl mb-4">04</div>
              <h3 className="text-white text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-400">
                We believe in the power of teamwork and partnership, both within our organization and with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">The People Behind Our Success</span>
            <h2 className="heading-lg mb-6">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the visionary leaders who drive our company's mission and ensure we deliver exceptional value to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="David Mitchell" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">David Mitchell</h3>
              <p className="text-quantum-red mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                With over 20 years of experience in technology leadership, David founded QuantumCraft with a vision of making advanced IT solutions accessible to all businesses.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-quantum-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-quantum-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-quantum-red mb-4">Chief Technology Officer</p>
              <p className="text-gray-600 mb-4">
                Sarah leads our technical strategy and innovation initiatives, ensuring that we remain at the cutting edge of emerging technologies.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-quantum-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-quantum-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                <img 
                  src="https://randomuser.me/api/portraits/men/65.jpg" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
              <p className="text-quantum-red mb-4">Chief Operations Officer</p>
              <p className="text-gray-600 mb-4">
                Michael oversees our day-to-day operations, ensuring that we deliver consistent, high-quality services to all our clients.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-quantum-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-quantum-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Emily Thompson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Emily Thompson</h3>
              <p className="text-quantum-red mb-4">Chief Client Officer</p>
              <p className="text-gray-600 mb-4">
                Emily ensures that our clients' needs are at the center of everything we do, overseeing client relationships and satisfaction.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-quantum-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-quantum-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-quantum-red">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">Ready to Elevate Your Business with Advanced IT Solutions?</h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Let's collaborate to create a technology strategy that drives your business forward.
            </p>
            <Link to="/contact" className="inline-block bg-white text-quantum-red px-8 py-4 rounded-md font-bold text-lg hover:bg-black hover:text-white transition-colors duration-300">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
