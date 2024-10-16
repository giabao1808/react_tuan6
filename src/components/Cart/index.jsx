import React from 'react';

export default function Cart({ cartItems, handleResetCart }) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      
      {cartItems.length > 0 ? (
        <>
          <ul className="mb-6 border border-gray-300 rounded-lg divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="p-4 flex justify-between items-center">
                <span>{item.name}</span>
                <span className="font-bold">${item.price}</span>
              </li>
            ))}
          </ul>

          <div className="text-end">
            <button
              onClick={handleResetCart}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Thanh toán
            </button>
          </div>
        </>
      ) : (
        <p className="text-lg">Your cart is empty.</p>
      )}
    </div>
  );
}
