
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuPage from '../components/MenuPage';
import ItemDetail from '../components/ItemDetail';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
};

export default Index;
