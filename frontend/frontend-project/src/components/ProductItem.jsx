import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => (
  <li>
    <strong>{product.name}</strong> - {product.description} - ${product.price}
    <button onClick={() => onEdit(product)}>Edit</button>
    <button onClick={() => onDelete(product.id)}>Delete</button>
  </li>
);

export default ProductItem;
