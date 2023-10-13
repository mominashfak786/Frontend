import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../Redux/Action/productActions';
import { Link } from 'react-router-dom'; // Import Link from React Router

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = (productId) => {
    // Dispatch the deleteProduct action with the product's ID
    dispatch(deleteProduct(productId));
  };

  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <div className="w-40 h-40 overflow-hidden mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-gray-500">${product.price}</p>
        <button
          onClick={() => handleRemoveClick(product.id)} // Call handleRemoveClick with the product's ID
          className="bg-red-500 text-white py-2 px-4 mt-2 rounded"
        >
          Remove
        </button>
        <Link to={`/info/${product.id}`} key={product.id}>
          <div className="bg-blue-500 text-white py-2 px-4 mt-2 rounded">
            Product Details
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
