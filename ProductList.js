import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products?keyword=${keyword}`);
      setProducts(data);
    };
    fetchProducts();
  }, [keyword]);

  return (
    <>
      <input type="text" placeholder="Search..." onChange={(e) => setKeyword(e.target.value)} />
      <div>
        {products.map((p) => (
          <div key={p._id}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
