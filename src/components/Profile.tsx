import React from 'react';
import { ArrowLeft, User, MapPin, Phone, Mail, Settings, LogOut, CreditCard, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  
  // Mock user data - in a real app, this would come from auth state/API
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    address: '123 Food Street, Gourmet City, 400001'
  };

  const profileOptions = [
    { icon: User, label: 'Edit Profile', onClick: () => {} },
    { icon: MapPin, label: 'Delivery Address', onClick: () => {} },
    { icon: CreditCard, label: 'Payment Methods', onClick: () => {} },
    { icon: Bell, label: 'Notifications', onClick: () => {} },
    { icon: Settings, label: 'Settings', onClick: () => {} },
  ];

  const handleBottomNavClick = (page: string) => {
    switch(page) {
      case 'menu':
        navigate('/');
        break;
      case 'favorites':
        navigate('/favorites');
        break;
      case 'orders':
        navigate('/orders');
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
          <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        </div>
      </div>

      {/* Profile Content */}
      <div className="p-4 space-y-6">
        {/* User Info Card */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-emerald-100">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <Phone className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">{user.phone}</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">{user.email}</span>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
              <span className="text-gray-700">{user.address}</span>
            </div>
          </div>
        </div>

        {/* Profile Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Account Settings</h3>
          
          <div className="space-y-2">
            {profileOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.onClick}
                className="w-full flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <option.icon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">{option.label}</span>
                <ArrowLeft className="w-4 h-4 text-gray-400 ml-auto rotate-180" />
              </button>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full flex items-center justify-center gap-3 p-4 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
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
          <button 
            onClick={() => handleBottomNavClick('favorites')}
            className="flex flex-col items-center opacity-60"
          >
            <div className="w-6 h-6 mb-1">❤️</div>
            <span className="text-gray-500 text-sm">Favorites</span>
          </button>
          <button 
            onClick={() => handleBottomNavClick('orders')}
            className="flex flex-col items-center opacity-60"
          >
            <div className="w-6 h-6 mb-1">📋</div>
            <span className="text-gray-500 text-sm">Orders</span>
          </button>
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 bg-emerald-600 rounded-full mb-1"></div>
            <span className="text-emerald-600 text-sm font-medium">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;