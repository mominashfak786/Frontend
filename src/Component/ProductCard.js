import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/Action/productActions";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div className="w-1/3 p-2" key={product.id}>
      <div className="bg-white shadow-lg p-3 rounded-lg">
        <div className="w-72 h-50 mt-2  mx-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full "
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-lg font-bold mb-2">{product.title}</h2>
          <p className="text-gray-500 mb-2">{product.description}</p>
          <p className="text-gray-500 mb-2">${product.price}</p>
          <button
            onClick={() => handleRemoveClick(product.id)}
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
    </div>
  );
};

export default ProductCard;
