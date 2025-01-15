import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onEdit, onDelete }) => (
  <ul>
    {products.map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default ProductList;
