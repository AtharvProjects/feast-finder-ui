import React, { useState } from 'react';
import { ArrowLeft, Heart, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MenuCard from './MenuCard';

// Import images
import pancakesPearOrange from '../assets/pancakes-pear-orange.jpg';
import sweetPancakes from '../assets/sweet-pancakes.jpg';
import salmonDelight from '../assets/salmon-delight.jpg';

const Favorites = () => {
  const navigate = useNavigate();
  
  // Mock favorite items - in a real app, this would come from state/API
  const favoriteItems = [
    {
      id: 1,
      name: 'Pear & Orange',
      price: 950.00,
      time: '30 min',
      rating: 4.8,
      image: pancakesPearOrange,
      category: 'Breakfast',
      description: 'As a rule, pancakes are served for breakfast with various sweet sauces, chocolate, berries, maple syrup.'
    },
    {
      id: 4,
      name: 'Sweet Pancake',
      price: 680.00,
      time: '20 min',
      rating: 4.9,
      image: sweetPancakes,
      category: 'Dessert',
      description: 'Fluffy pancakes topped with fresh berries and maple syrup for the perfect sweet treat.'
    },
    {
      id: 5,
      name: 'Salmon Delight',
      price: 1580.00,
      time: '25 min',
      rating: 4.6,
      image: salmonDelight,
      category: 'Lunch',
      description: 'Fresh Atlantic salmon with seasonal vegetables and herb butter sauce.'
    }
  ];

  const handleItemClick = (id: number) => {
    navigate(`/item/${id}`);
  };

  const handleBottomNavClick = (page: string) => {
    switch(page) {
      case 'menu':
        navigate('/');
        break;
      case 'orders':
        navigate('/orders');
        break;
      case 'profile':
        navigate('/profile');
        break;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm rounded-b-3xl">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Favorites</h1>
        </div>
      </div>

      {/* Favorites Content */}
      <div className="p-4 space-y-4">
        {favoriteItems.length > 0 ? (
          <>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-red-500 fill-current" />
              <span className="text-gray-600">{favoriteItems.length} favorite items</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {favoriteItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onClick={() => handleItemClick(item.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No favorites yet</h3>
            <p className="text-gray-500 mb-6">Start adding items to your favorites to see them here</p>
            <button
              onClick={() => navigate('/')}
              className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              Browse Menu
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex justify-around items-center">
          <button 
            onClick={() => handleBottomNavClick('menu')}
            className="flex flex-col items-center opacity-60"
          >
            <div className="w-2 h-2 bg-transparent rounded-full mb-1"></div>
            <span className="text-gray-500 text-sm">Menu</span>
          </button>
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 bg-emerald-600 rounded-full mb-1"></div>
            <span className="text-emerald-600 text-sm font-medium">Favorites</span>
          </div>
          <button 
            onClick={() => handleBottomNavClick('orders')}
            className="flex flex-col items-center opacity-60"
          >
            <div className="w-6 h-6 mb-1">📋</div>
            <span className="text-gray-500 text-sm">Orders</span>
          </button>
          <button 
            onClick={() => handleBottomNavClick('profile')}
            className="flex flex-col items-center opacity-60"
          >
            <div className="w-6 h-6 mb-1">👤</div>
            <span className="text-gray-500 text-sm">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;