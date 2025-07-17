
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Clock, Heart, Minus, Plus } from 'lucide-react';

// Import images
import pancakesPearOrange from '../assets/pancakes-pear-orange.jpg';
import meatMushrooms from '../assets/meat-mushrooms.jpg';
import eggBread from '../assets/egg-bread.jpg';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data - in a real app, this would come from props or API
  const item = {
    id: 1,
    name: 'Pear & Orange',
    price: 950.00,
    time: '30 min',
    rating: 4.8,
    image: pancakesPearOrange,
    category: 'Breakfast',
    description: 'As a rule, pancakes are served for breakfast with various sweet sauces, chocolate, berries, maple syrup. Pancakes were a very popular breakfast only in the USA and Canada, but now pancakes enjoy breakfast all over the world.'
  };

  const recentlyViewed = [
    { id: 2, image: meatMushrooms },
    { id: 3, image: eggBread },
    { id: 4, image: pancakesPearOrange }
  ];

  const handleQuantityChange = (increment: boolean) => {
    if (increment) {
      setQuantity(prev => prev + 1);
    } else if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const totalPrice = (item.price * quantity).toFixed(0);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
      {/* Header Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        
        {/* Header Controls */}
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
            <ShoppingCart className="w-5 h-5 text-emerald-600" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 -mt-6 bg-white rounded-t-3xl relative z-10">
        {/* Title and Stats */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{item.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isFavorite ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-400'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        <div className="text-2xl font-bold text-gray-800 mb-4">
          ₹{item.price.toFixed(0)}
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Recently Viewed */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Recently Viewed</h3>
          <div className="flex gap-3">
            {recentlyViewed.map((recentItem) => (
              <div key={recentItem.id} className="w-16 h-16 rounded-xl overflow-hidden">
                <img
                  src={recentItem.image}
                  alt="Recently viewed"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isFavorite ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-400'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          <div className="flex items-center gap-3 bg-gray-50 rounded-full p-1">
            <button
              onClick={() => handleQuantityChange(false)}
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="w-8 text-center font-semibold text-gray-800">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(true)}
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <button className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition-colors">
            Add to cart • ₹{totalPrice}
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center opacity-60">
            <div className="w-2 h-2 bg-emerald-600 rounded-full mb-1"></div>
            <span className="text-emerald-600 text-sm font-medium">Menu</span>
          </div>
          <div className="flex flex-col items-center opacity-60">
            <div className="w-6 h-6 mb-1">❤️</div>
            <span className="text-gray-500 text-sm">Favorites</span>
          </div>
          <div className="flex flex-col items-center opacity-60">
            <div className="w-6 h-6 mb-1">📋</div>
            <span className="text-gray-500 text-sm">Orders</span>
          </div>
          <div className="flex flex-col items-center opacity-60">
            <div className="w-6 h-6 mb-1">👤</div>
            <span className="text-gray-500 text-sm">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
