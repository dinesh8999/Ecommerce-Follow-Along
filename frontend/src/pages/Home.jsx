import React from 'react';
import ProductCard from '../components/auth/Productcard';

const productDetails = [
  {
    image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Product 1',
    price: 100,
    description: 'This is a product'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1682969053384-df7b3cdb377d?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Product 2',
    price: 150,
    description: 'This is a product'
  },
  {
    image: 'https://images.unsplash.com/photo-1621342718587-20f12e57c3ec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Product 3',
    price: 300,
    description: 'This is a product'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1673483585794-cbcfe1451f6a?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Product 4',
    price: 150,
    description: 'This is a product'
  },
  {
    image: 'https://images.unsplash.com/photo-1526000130-b9ea509bfbf3?q=80&w=2150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Product 5',
    price: 300,
    description: 'This is a product'
  }
];

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">Our Products</h1>

        {/* Grid Layout for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {productDetails.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;