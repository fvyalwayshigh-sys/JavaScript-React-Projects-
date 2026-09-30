import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductGrid = props => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
      {props.filteredProducts.map(product => {
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
