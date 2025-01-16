import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => (
  <li>
    <p><strong>{product.name}</strong> - {product.description} - &#8377;{product.price}</p>
    <button className='edit-btn buttons'  onClick={() => onEdit(product)}>Edit</button>
    <button className='delete-btn buttons' onClick={() => onDelete(product.id)}>Delete</button>
  </li>
);

export default ProductItem;
