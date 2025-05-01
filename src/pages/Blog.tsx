
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends to Watch",
      excerpt: "Cloud computing continues to evolve at a rapid pace. In this post, we explore the emerging trends that are shaping the future of cloud technology and how businesses can prepare for these changes.",
      date: "May 10, 2023",
      author: "David Mitchell",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc."
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "The shift to remote work has created new cybersecurity challenges for businesses. Learn about the key risks and strategies for maintaining robust security in a distributed work environment.",
      date: "April 25, 2023",
      author: "Sarah Johnson",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=500&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc."
    },
    {
      id: 3,
      title: "Leveraging AI for Business Intelligence",
      excerpt: "Artificial intelligence is revolutionizing how businesses collect and analyze data. Discover how AI-powered business intelligence can help you make more informed decisions and gain competitive advantage.",
      date: "April 12, 2023",
      author: "Michael Chen",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=500&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc."
    },
    {
      id: 4,
      title: "The Role of DevOps in Modern Software Development",
      excerpt: "DevOps practices are essential for efficient software development and deployment. Learn how integrating DevOps into your development workflow can accelerate innovation and improve quality.",
      date: "March 28, 2023",
      author: "Emily Thompson",
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=500&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc."
    },
    {
      id: 5,
      title: "Digital Transformation Success Stories",
      excerpt: "Digital transformation can significantly enhance business operations and customer experiences. Explore real-world examples of successful transformations and the lessons they offer.",
      date: "March 15, 2023",
      author: "David Mitchell",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=500&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc."
    },
    {
      id: 6,
      title: "The Impact of 5G on IoT and Edge Computing",
      excerpt: "The rollout of 5G networks is set to revolutionize IoT and edge computing applications. Discover the potential implications for businesses and how to prepare for this technological shift.",
      date: "February 28, 2023",
      author: "Sarah Johnson",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nunc."
    }
  ];

  // Categories for filtering
  const allCategories = ["All", ...new Set(blogPosts.map(post => post.category))];
  
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Our Blog</span>
            <h1 className="heading-xl text-black mb-6">Latest Insights</h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest trends, insights, and innovations in the world of IT
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&h=800&q=80')] bg-cover bg-center"></div>
        </div>
      </section>

      {/* Blog Posts */}
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
          
          {/* Featured Post */}
          {filteredPosts.length > 0 && activeCategory === "All" && (
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title} 
                    className="w-full h-auto object-cover transition-transform hover:scale-105 duration-700"
                  />
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{filteredPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{filteredPosts[0].category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <Link to={`/blog/${filteredPosts[0].id}`} className="hover:text-quantum-red transition-colors">
                      {filteredPosts[0].title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {filteredPosts[0].author}</span>
                    <Link to={`/blog/${filteredPosts[0].id}`} className="btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(activeCategory === "All" ? 1 : 0).map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                category={post.category}
                image={post.image}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No posts found</h3>
              <p className="text-gray-600">
                No posts matching the selected category were found. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-quantum-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-quantum-red uppercase font-bold tracking-wider mb-2 block">Stay Updated</span>
            <h2 className="heading-lg mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest insights, trends, and news in the IT industry delivered straight to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-quantum-red focus:border-transparent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
