import React from 'react';
import {  useLocation } from 'react-router-dom';

export default function ProductDetails({ addToCart }) {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>Không có thông tin chi tiết sản phẩm.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto border border-gray-200 rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h2>

      <div className="flex space-x-10">
        <div>
          <img
            src={product.imgUrl}
            alt={product.name}
            className="w-80 h-80 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xl font-semibold text-gray-700">Giá: <span className="text-green-500">{product.price} VNĐ</span></p>
            <p className="text-lg text-gray-600 mb-6">Mô tả: {product.desc}</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
