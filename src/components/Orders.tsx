import React from 'react';
import { ArrowLeft, Clock, CheckCircle, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();
  
  // Mock order data - in a real app, this would come from state/API
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      time: '2:30 PM',
      status: 'delivered',
      total: 2630.00,
      items: [
        { name: 'Salmon Delight', quantity: 1, price: 1580.00 },
        { name: 'Sweet Pancake', quantity: 2, price: 680.00 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-14',
      time: '1:15 PM',
      status: 'preparing',
      total: 1900.00,
      items: [
        { name: 'Meat & Mushrooms', quantity: 1, price: 1400.00 },
        { name: 'Egg & Bread', quantity: 1, price: 950.00 }
      ]
    },
    {
      id: 'ORD-003',
      date: '2024-01-13',
      time: '12:45 PM',
      status: 'delivered',
      total: 950.00,
      items: [
        { name: 'Pear & Orange', quantity: 1, price: 950.00 }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'delivered':
        return 'text-green-600 bg-green-50';
      case 'preparing':
        return 'text-orange-600 bg-orange-50';
      case 'pending':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />;
      case 'preparing':
        return <Clock className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const handleBottomNavClick = (page: string) => {
    switch(page) {
      case 'menu':
        navigate('/');
        break;
      case 'favorites':
        navigate('/favorites');
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
          <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
        </div>
      </div>

      {/* Orders Content */}
      <div className="p-4 space-y-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
              {/* Order Header */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">{order.id}</h3>
                  <p className="text-sm text-gray-500">{order.date} • {order.time}</p>
                </div>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="capitalize">{order.status}</span>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-2 mb-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{item.quantity}x {item.name}</span>
                    <span className="font-medium">₹{item.price.toFixed(0)}</span>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                <span className="font-semibold text-gray-800">Total</span>
                <span className="font-bold text-emerald-600">₹{order.total.toFixed(0)}</span>
              </div>

              {/* Action Buttons */}
              <div className="mt-3 flex gap-2">
                <button className="flex-1 bg-emerald-50 text-emerald-600 py-2 px-4 rounded-xl text-sm font-medium hover:bg-emerald-100 transition-colors">
                  Reorder
                </button>
                <button className="flex-1 border border-gray-200 text-gray-600 py-2 px-4 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                  Track Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No orders yet</h3>
            <p className="text-gray-500 mb-6">Your order history will appear here</p>
            <button
              onClick={() => navigate('/')}
              className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              Start Ordering
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
          <button 
            onClick={() => handleBottomNavClick('favorites')}
            className="flex flex-col items-center opacity-60"
          >
            <div className="w-6 h-6 mb-1">❤️</div>
            <span className="text-gray-500 text-sm">Favorites</span>
          </button>
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 bg-emerald-600 rounded-full mb-1"></div>
            <span className="text-emerald-600 text-sm font-medium">Orders</span>
          </div>
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

export default Orders;