
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuPage from '../components/MenuPage';
import ItemDetail from '../components/ItemDetail';
import Favorites from '../components/Favorites';
import Orders from '../components/Orders';
import Profile from '../components/Profile';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Index;
