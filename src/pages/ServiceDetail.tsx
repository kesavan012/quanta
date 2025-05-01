
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  fullDesc: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  benefits: string[];
  image: string;
}

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock services data - in a real app, this would come from an API
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
      fullDesc: "Our cloud solutions provide businesses with the flexibility, scalability, and resilience needed in today's digital landscape. We help you migrate, optimize, and manage your infrastructure in the cloud, ensuring maximum performance and cost-efficiency. Our team specializes in AWS, Azure, and Google Cloud, delivering tailored solutions that align with your business goals.",
      features: [
        {
          title: "Cloud Migration",
          description: "Seamless transition of your applications and data to the cloud with minimal disruption to your business operations.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
        },
        {
          title: "Cloud Optimization",
          description: "Fine-tune your cloud resources to maximize performance while minimizing costs through right-sizing and automation.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        },
        {
          title: "Multi-Cloud Strategy",
          description: "Develop and implement multi-cloud approaches that leverage the strengths of different providers for optimal results.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path></svg>
        },
        {
          title: "Cloud Security",
          description: "Implement robust security measures to protect your cloud infrastructure and data from threats and vulnerabilities.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        }
      ],
      benefits: [
        "Reduced IT infrastructure costs and maintenance overhead",
        "Enhanced scalability to meet changing business demands",
        "Improved disaster recovery and business continuity",
        "Greater agility and faster time-to-market for new initiatives",
        "Access to cutting-edge technologies and services"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=800&q=80"
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
      fullDesc: "In an era of increasing cyber threats, our cybersecurity services provide robust protection for your critical systems and data. We offer comprehensive security assessments, threat monitoring, incident response, and compliance solutions. Our experts implement multi-layered security strategies that safeguard your business while enabling operational efficiency.",
      features: [
        {
          title: "Security Assessment",
          description: "Thorough evaluation of your security posture to identify vulnerabilities and recommend appropriate countermeasures.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
        },
        {
          title: "Managed Security Services",
          description: "24/7 monitoring and management of your security infrastructure to detect and respond to threats in real-time.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        },
        {
          title: "Incident Response",
          description: "Rapid and effective response to security incidents, minimizing damage and restoring normal operations quickly.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        },
        {
          title: "Compliance Management",
          description: "Ensure your security practices meet industry regulations and standards, avoiding potential penalties.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        }
      ],
      benefits: [
        "Protection against evolving cyber threats and attacks",
        "Reduced risk of data breaches and associated costs",
        "Maintained business continuity and reputation",
        "Regulatory compliance and avoidance of penalties",
        "Enhanced customer trust and confidence"
      ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=800&q=80"
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
      fullDesc: "Our software development team creates bespoke applications that address your unique business challenges. We follow industry best practices and agile methodologies to deliver high-quality, scalable, and maintainable software. From web and mobile apps to enterprise solutions, we bring your vision to life with cutting-edge technologies.",
      features: [
        {
          title: "Custom Application Development",
          description: "Tailored software solutions designed specifically for your business needs and processes.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        },
        {
          title: "Web Application Development",
          description: "Responsive, user-friendly web applications with modern interfaces and robust functionality.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android devices.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
        },
        {
          title: "Legacy System Modernization",
          description: "Update and transform outdated systems to leverage modern technologies and capabilities.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        }
      ],
      benefits: [
        "Solutions tailored to your specific business requirements",
        "Improved operational efficiency and productivity",
        "Enhanced customer experiences and satisfaction",
        "Competitive advantage through digital innovation",
        "Scalable architecture that grows with your business"
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=800&q=80"
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
      fullDesc: "Harness the power of artificial intelligence and machine learning to gain competitive advantage. Our AI solutions help you extract meaningful insights from your data, automate routine tasks, and make more informed business decisions. We develop custom AI models and algorithms tailored to your specific industry and business needs.",
      features: [
        {
          title: "Predictive Analytics",
          description: "Forecast future trends and outcomes based on historical data to make proactive business decisions.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        },
        {
          title: "Natural Language Processing",
          description: "Enable computers to understand, interpret, and generate human language for applications like chatbots and sentiment analysis.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        },
        {
          title: "Computer Vision",
          description: "Implement systems that can interpret and understand visual information from images and videos.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
        },
        {
          title: "Process Automation",
          description: "Use AI to automate repetitive tasks and workflows, increasing efficiency and reducing errors.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        }
      ],
      benefits: [
        "Data-driven insights for strategic decision-making",
        "Automation of repetitive tasks, freeing up human resources",
        "Enhanced customer experiences through personalization",
        "Improved operational efficiency and cost reduction",
        "Early detection of potential issues or opportunities"
      ],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&h=800&q=80"
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
      fullDesc: "Our IT consulting services provide strategic guidance to help you navigate the complex technology landscape. We assess your current IT infrastructure, identify areas for improvement, and develop comprehensive roadmaps that align technology investments with your business objectives. Our consultants bring decades of experience across various industries.",
      features: [
        {
          title: "IT Strategy Development",
          description: "Create comprehensive technology roadmaps aligned with your business goals and objectives.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        },
        {
          title: "Technology Assessment",
          description: "Evaluate your current IT infrastructure to identify gaps, inefficiencies, and opportunities for improvement.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
        },
        {
          title: "Vendor Selection",
          description: "Guidance on selecting the right technology vendors and solutions for your specific needs.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        },
        {
          title: "Project Management",
          description: "Expert oversight and coordination of IT initiatives to ensure successful delivery on time and within budget.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        }
      ],
      benefits: [
        "Strategic alignment of IT initiatives with business goals",
        "Reduced risk in technology investments and implementations",
        "Access to specialized expertise and industry knowledge",
        "Improved project outcomes and success rates",
        "Independent and objective technology guidance"
      ],
      image: "https://images.unsplash.com/photo-1559223607-a43f990c3fb3?auto=format&fit=crop&w=1200&h=800&q=80"
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
      fullDesc: "Digital transformation is more than just implementing new technologies—it's about fundamentally changing how your business operates and delivers value. Our holistic approach encompasses technology implementation, process optimization, and organizational change management to ensure successful adoption and maximum ROI.",
      features: [
        {
          title: "Digital Strategy",
          description: "Develop a comprehensive digital roadmap that aligns with your business objectives and market opportunities.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        },
        {
          title: "Process Optimization",
          description: "Streamline and automate business processes to improve efficiency, reduce costs, and enhance customer experiences.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        },
        {
          title: "Customer Experience Design",
          description: "Create seamless, engaging digital experiences that meet and exceed customer expectations across all touchpoints.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        },
        {
          title: "Change Management",
          description: "Facilitate successful adoption of new technologies and processes through effective communication, training, and support.",
          icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
        }
      ],
      benefits: [
        "Enhanced customer experiences and engagement",
        "Increased operational efficiency and agility",
        "New digital revenue streams and business models",
        "Improved data utilization for decision-making",
        "Greater competitive advantage in the digital marketplace"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800&q=80"
    }
  ];

  useEffect(() => {
    // Simulate API call to fetch service data
    const fetchData = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      try {
        // Find the service with the matching ID
        const foundService = allServices.find(service => service.id === id);
        
        if (foundService) {
          setService(foundService);
        }
      } catch (error) {
        console.error('Error fetching service:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 border-4 border-quantum-red border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-gray-300">Loading service details...</p>
            </div>
          ) : service ? (
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Services</span>
              <h1 className="heading-xl text-white mb-6">{service.title}</h1>
              <p className="text-xl text-gray-300">
                {service.description}
              </p>
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4 text-white">Service not found</h2>
              <p className="text-gray-300 mb-8">
                The service you're looking for doesn't exist or has been removed.
              </p>
              <Link to="/services" className="btn-primary">
                Back to Services
              </Link>
            </div>
          )}
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&h=800&q=80')] bg-cover bg-center"></div>
        </div>
      </section>

      {service && (
        <>
          {/* Service Overview */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Overview</span>
                  <h2 className="heading-lg mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    {service.fullDesc}
                  </p>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-quantum-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-video relative z-10 rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-full h-full bg-quantum-red rounded-lg z-0"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-20 bg-quantum-lightgray">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Features</span>
                <h2 className="heading-lg mb-6">Key Capabilities</h2>
                <p className="text-gray-600">
                  Our {service.title} services include a comprehensive range of features designed to meet your specific business needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-quantum-red mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-quantum-red">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="heading-lg text-white mb-6">Ready to Transform Your Business with Our {service.title}?</h2>
                <p className="text-xl text-white opacity-90 mb-8">
                  Contact us today to discuss how our {service.title} can help you achieve your business goals.
                </p>
                <Link to="/contact" className="inline-block bg-white text-quantum-red px-8 py-4 rounded-md font-bold text-lg hover:bg-black hover:text-white transition-colors duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </>
  );
};

export default ServiceDetail;
