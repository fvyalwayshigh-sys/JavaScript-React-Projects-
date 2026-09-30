import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
        <img
          className="object-contain w-full h-full mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h2 className="font-bold text-gray-800 text-lg leading-tight line-clamp-2">{product.name}</h2>
          <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap">
            {product.category}
          </span>
        </div>

        <div className="flex items-center mb-4 mt-auto pt-2">
          <span className="flex items-center text-yellow-500 text-sm font-medium">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            {product.rating}
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl lg:text-1xl font-extrabold text-gray-900">${product.price}</span>
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
