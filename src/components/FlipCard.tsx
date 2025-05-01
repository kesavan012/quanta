
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FlipCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  linkTo: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, icon, description, linkTo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-80 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'transform rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
          <div className="text-quantum-red mb-4 text-4xl">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-500 mb-4 line-clamp-3">{description.substring(0, 100)}...</p>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden transform rotate-y-180 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-between text-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-500 mb-6">{description}</p>
          </div>
          <Link to={linkTo} className="btn-primary mt-4">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
