import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ cartItems }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <a href='/' className="text-2xl font-bold text-gray-800">Bảo Store</a>
      <div className="flex items-center space-x-6">
        <Link to="/cart" className="text-lg text-blue-500 hover:text-blue-700">
          🛒 Cart ({cartItems.length})
        </Link>
      </div>
    </div>
  );
}
