import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';
import products from './data/products';

const App = () => {
  const [search, setsearch] = useState('');

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <NavBar />
      <SearchBar search={search} setsearch={setsearch} />
      <FilterBar />
      <ProductGrid filteredProducts={filteredProducts} />
    </div>
  );
};

export default App;
