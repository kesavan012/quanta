
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock blog posts data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends to Watch",
      excerpt: "Cloud computing continues to evolve at a rapid pace. In this post, we explore the emerging trends that are shaping the future of cloud technology and how businesses can prepare for these changes.",
      date: "May 10, 2023",
      author: "David Mitchell",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500&q=80",
      content: "Cloud computing has become an integral part of modern business operations, providing scalability, flexibility, and cost-efficiency. As we look to the future, several key trends are emerging that will shape the evolution of cloud technology. Hybrid and multi-cloud approaches are becoming increasingly common, allowing organizations to leverage the strengths of different providers while mitigating risks. Edge computing is gaining traction, bringing processing power closer to where data is generated for faster insights and reduced latency. Serverless computing continues to grow, enabling developers to focus on code rather than infrastructure management. AI and machine learning capabilities are being integrated more deeply into cloud platforms, making advanced analytics more accessible. Containerization and microservices architecture are transforming application development and deployment. Security and compliance considerations remain paramount, with providers enhancing their offerings to address evolving threats and regulatory requirements. As businesses navigate these trends, strategic planning and thoughtful implementation will be essential for maximizing the benefits of cloud computing while managing potential challenges."
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "The shift to remote work has created new cybersecurity challenges for businesses. Learn about the key risks and strategies for maintaining robust security in a distributed work environment.",
      date: "April 25, 2023",
      author: "Sarah Johnson",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=500&q=80",
      content: "The rapid transition to remote work has significantly expanded the attack surface for organizations, creating new cybersecurity challenges that demand innovative solutions. With employees accessing sensitive data from various locations and devices, traditional security perimeters have become obsolete. Zero-trust security models have emerged as a crucial approach, verifying every access request regardless of origin. Endpoint security has gained renewed importance, as personal devices often lack enterprise-grade protections. VPNs and secure remote access solutions have become essential, though they must be properly configured and monitored. Phishing attacks targeting remote workers have surged, exploiting pandemic-related anxieties and the isolation of home offices. Security awareness training has never been more critical, helping employees recognize threats across multiple communication channels. Cloud security considerations have evolved as organizations accelerate digital transformation initiatives. Insider threats, whether malicious or accidental, require careful monitoring through behavioral analytics. Effective incident response planning must account for the distributed nature of the workforce. As hybrid work models become the norm, cybersecurity strategies must balance security requirements with usability, ensuring protection without hampering productivity."
    },
    {
      id: 3,
      title: "Leveraging AI for Business Intelligence",
      excerpt: "Artificial intelligence is revolutionizing how businesses collect and analyze data. Discover how AI-powered business intelligence can help you make more informed decisions and gain competitive advantage.",
      date: "April 12, 2023",
      author: "Michael Chen",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=500&q=80",
      content: "Artificial intelligence is transforming business intelligence (BI) from a retrospective reporting tool into a predictive and prescriptive powerhouse. Traditional BI approaches often struggled with data volume, variety, and velocity, but AI-powered solutions excel at processing massive datasets from diverse sources in real-time. Machine learning algorithms can identify patterns and anomalies that would be impossible for human analysts to detect, providing deeper insights and revealing hidden opportunities. Natural language processing enables non-technical users to interact with complex data through conversational interfaces, democratizing access to analytics throughout the organization. Computer vision capabilities allow for the analysis of visual data, opening new avenues for market research and operational optimization. Automated data cleansing and preparation reduce the time and resources required for analytics projects, accelerating time-to-insight. Predictive analytics forecasts future trends with increasing accuracy, while prescriptive analytics recommends specific actions to achieve desired outcomes. As AI continues to advance, businesses that effectively integrate these technologies into their BI strategies will gain significant competitive advantages through faster, more informed decision-making and the ability to anticipate market changes before they occur."
    },
    {
      id: 4,
      title: "The Role of DevOps in Modern Software Development",
      excerpt: "DevOps practices are essential for efficient software development and deployment. Learn how integrating DevOps into your development workflow can accelerate innovation and improve quality.",
      date: "March 28, 2023",
      author: "Emily Thompson",
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=500&q=80",
      content: "DevOps has evolved from a niche methodology to an essential approach for organizations seeking to deliver high-quality software at velocity. By breaking down traditional silos between development and operations teams, DevOps fosters collaboration, shared responsibility, and a culture of continuous improvement. Automation lies at the heart of successful DevOps implementation, covering everything from code integration and testing to deployment and infrastructure provisioning. Continuous Integration (CI) practices ensure code changes are regularly merged and validated, while Continuous Delivery (CD) provides a reliable, repeatable path to production. Infrastructure as Code (IaC) treats infrastructure configuration as software, enabling version control and reproducibility. Containerization technologies like Docker and orchestration platforms like Kubernetes have accelerated DevOps adoption by providing consistent environments across the development lifecycle. Monitoring and observability practices deliver real-time insights into application performance and user experience, enabling proactive issue resolution. Security integration throughout the pipeline (DevSecOps) addresses the need for robust protection without sacrificing speed. As organizations mature in their DevOps journey, they typically see significant improvements in deployment frequency, lead time for changes, change failure rate, and mean time to recovery—metrics that directly impact business outcomes and competitive advantage."
    },
    {
      id: 5,
      title: "Digital Transformation Success Stories",
      excerpt: "Digital transformation can significantly enhance business operations and customer experiences. Explore real-world examples of successful transformations and the lessons they offer.",
      date: "March 15, 2023",
      author: "David Mitchell",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=500&q=80",
      content: "Digital transformation has become a strategic imperative for organizations across industries, with successful implementations yielding remarkable results in operational efficiency, customer experience, and innovation capacity. A global retail chain revitalized its business by implementing an omnichannel strategy, unifying the customer journey across physical stores, e-commerce, and mobile applications. Real-time inventory visibility and personalized recommendations drove a 30% increase in customer retention and significant revenue growth. A manufacturing leader embraced Industry 4.0 principles, deploying IoT sensors throughout its facilities to enable predictive maintenance and optimize production schedules. The resulting reduction in downtime and increased throughput delivered millions in cost savings and improved delivery reliability. A financial services institution reimagined its core banking platform using cloud-native microservices architecture, reducing new product launch timelines from months to weeks while strengthening security and compliance capabilities. A healthcare provider revolutionized patient care through telemedicine integration and data analytics, improving treatment outcomes while extending services to underserved communities. Common success factors across these transformations include strong executive sponsorship, cross-functional collaboration, customer-centric design thinking, agile implementation approaches, and a focus on cultural change management. Organizations contemplating digital transformation should learn from these examples while developing strategies tailored to their unique challenges and opportunities."
    },
    {
      id: 6,
      title: "The Impact of 5G on IoT and Edge Computing",
      excerpt: "The rollout of 5G networks is set to revolutionize IoT and edge computing applications. Discover the potential implications for businesses and how to prepare for this technological shift.",
      date: "February 28, 2023",
      author: "Sarah Johnson",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500&q=80",
      content: "The convergence of 5G networks, Internet of Things (IoT) devices, and edge computing is creating an unprecedented technological synergy with far-reaching implications for businesses and consumers alike. 5G's enhanced capabilities—including ultra-low latency, massive device connectivity, and dramatically increased bandwidth—address critical limitations that previously constrained IoT deployments. Mission-critical applications that require real-time processing, such as autonomous vehicles, industrial automation, and remote healthcare, become truly viable at scale with 5G's sub-millisecond latency. Edge computing complements 5G by processing data closer to its source, reducing backhaul traffic and further decreasing latency while enhancing privacy and resilience. Smart cities will leverage this technological trinity to optimize traffic flow, enhance public safety, and improve resource management through dense sensor networks and real-time analytics. Manufacturing environments will evolve into highly adaptive systems with flexible production lines, predictive maintenance, and augmented reality guidance for workers. Healthcare will see transformative applications in remote surgery, continuous patient monitoring, and personalized medicine delivered through wearable devices. As these technologies mature, businesses must develop strategic roadmaps that include spectrum planning, edge infrastructure deployment, application modernization, and comprehensive security frameworks. Organizations that proactively embrace these complementary technologies will gain competitive advantages through enhanced operational efficiency, improved customer experiences, and innovative business models that weren't previously possible."
    }
  ];

  useEffect(() => {
    // Simulate API call to fetch blog post data
    const fetchData = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      try {
        // Find the post with the matching ID
        const parsedId = parseInt(id || '0', 10);
        const foundPost = blogPosts.find(post => post.id === parsedId);
        
        if (foundPost) {
          setPost(foundPost);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
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

      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 border-4 border-quantum-red border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading post...</p>
            </div>
          ) : post ? (
            <div className="max-w-3xl mx-auto">
              <div className="mb-6 text-center">
                <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">
                  {post.category}
                </span>
                <h1 className="heading-xl text-black mb-4">{post.title}</h1>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
              </div>

              <div className="mb-10 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {post.content}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Share this post:</span>
                  <div className="flex space-x-4">
                    <a
                      href="#facebook"
                      className="text-gray-600 hover:text-quantum-red"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="#twitter"
                      className="text-gray-600 hover:text-quantum-red"
                      aria-label="Share on Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#linkedin"
                      className="text-gray-600 hover:text-quantum-red"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm8 0h-4.979v16h5v-8.399c0-4.671 6-5.051 6 0v8.399h5v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-quantum-red hover:text-black transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to All Posts
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
              <p className="text-gray-600 mb-8">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link to="/blog" className="btn-primary">
                Back to Blog
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPost;
