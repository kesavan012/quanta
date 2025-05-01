
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string | number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, date, author, category, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2 duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 hover:text-quantum-red transition-colors">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {author}</span>
          <Link to={`/blog/${id}`} className="text-quantum-red font-medium hover:text-black transition-colors">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
