
import React from 'react';
import { Star, Clock } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  time: string;
  rating: number;
  image: string;
  category: string;
  description: string;
}

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm mb-2 leading-tight">
          {item.name}
        </h3>
        
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{item.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{item.rating}</span>
          </div>
        </div>
        
        <div className="font-bold text-gray-800">
          ₹{item.price.toFixed(0)}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
