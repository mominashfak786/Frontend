import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, sortProducts, addProduct } from '../Redux/Action/productActions';
import ProductCard from '../Component/ProductCard';

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState('low-to-high');
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    image: '',
    description: '',
    title: '',
    price: '',
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    dispatch(sortProducts(event.target.value));
  };

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    setNewProduct({
      image: '',
      description: '',
      title: '',
      price: '',
    });
    setShowAddProductModal(false);
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shopping Kart</h1>
          <div>
            <label htmlFor="sort" className="mr-2">
              Sort by Price:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="bg-gray-900 text-white p-2 rounded-md"
            >
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowAddProductModal(true)}
          >
            Add a Product
          </button>
        </div>
      </nav>

      <div className="container mx-auto mt-4">
        {products ? (
          <div className="flex flex-wrap justify-between">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {showAddProductModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70">
          <div className="bg-white p-4 rounded-md w-96">
            <h2 className="text-2xl font-bold mb-4">Add a Product</h2>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Title"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Description"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={handleAddProduct}
              >
                Add
              </button>
            </div>

            <div>
              <button
                className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => setShowAddProductModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
