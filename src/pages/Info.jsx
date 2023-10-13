// src/pages/Info.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const Info = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shooping Kart</h1>

          <Link to="/">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
           
            >
              Cancel
            </button>
          </Link>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        <div className="flex">
          <img src={product.image} alt={product.title} className="w-1/2" />
          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-xl font-bold mt-4">${product.price}</p>
       
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
