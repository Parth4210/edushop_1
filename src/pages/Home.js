import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://edushop-backend.onrender.com/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <main>
      <HeroSection />
      <TrustSection />
      <section className="products-section">
        <div className="products-header">
          <h2>Featured Products</h2>
          <span>{products.length} products available</span>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
