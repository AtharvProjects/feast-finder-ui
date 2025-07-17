
import React, { useState } from 'react';
import { Search, ShoppingCart, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MenuCard from './MenuCard';
import CategoryTabs from './CategoryTabs';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartItems, setCartItems] = useState(0);
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      name: 'Pear & Orange',
      price: 25.00,
      time: '30 min',
      rating: 4.8,
      image: '/lovable-uploads/785c4ab8-1c24-493f-a417-a020c1d6a8da.png',
      category: 'Breakfast',
      description: 'As a rule, pancakes are served for breakfast with various sweet sauces, chocolate, berries, maple syrup. Pancakes were a very popular breakfast only in the USA and Canada, but now pancakes enjoy breakfast all over the world.'
    },
    {
      id: 2,
      name: 'Meat & Mushrooms',
      price: 37.00,
      time: '30 min',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
      category: 'Lunch',
      description: 'Savory combination of tender meat and fresh mushrooms, perfectly seasoned and cooked to perfection.'
    },
    {
      id: 3,
      name: 'Egg & Bread',
      price: 25.00,
      time: '15 min',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400',
      category: 'Breakfast',
      description: 'Classic breakfast combination with perfectly cooked eggs and fresh artisanal bread.'
    },
    {
      id: 4,
      name: 'Sweet Pancake',
      price: 18.00,
      time: '20 min',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
      category: 'Dessert',
      description: 'Fluffy pancakes topped with fresh berries and maple syrup for the perfect sweet treat.'
    },
    {
      id: 5,
      name: 'Salmon Delight',
      price: 42.00,
      time: '25 min',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
      category: 'Lunch',
      description: 'Fresh Atlantic salmon with seasonal vegetables and herb butter sauce.'
    },
    {
      id: 6,
      name: 'Pasta Special',
      price: 28.00,
      time: '20 min',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400',
      category: 'Lunch',
      description: 'Homemade pasta with rich tomato sauce and fresh basil leaves.'
    }
  ];

  const categories = ['All', 'Breakfast', 'Lunch', 'Treats', 'Dessert', 'Drinks'];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleItemClick = (id: number) => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Menu</h1>
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-emerald-600" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
          />
        </div>

        {/* Category Tabs */}
        <CategoryTabs 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Menu Items Grid */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
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

export default MenuPage;
