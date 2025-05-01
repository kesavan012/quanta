
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, category, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={link} 
      className="block relative overflow-hidden group rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div 
        className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-quantum-red text-sm uppercase tracking-wider mb-2">{category}</span>
        <h3 className="text-white text-xl md:text-2xl font-bold text-center">{title}</h3>
        <div className={`mt-4 w-12 h-px bg-quantum-red transition-all duration-500 ${isHovered ? 'w-24' : 'w-12'}`}></div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
