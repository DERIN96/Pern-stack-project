import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name != '' && formData.description != '' && formData.price != '' ) {
        onSubmit(formData);
        setFormData({
            name: '',
            description: '',
            price: ''
        })
    } else {
        alert("All the fields are mandatory for adding new product!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className='input-description'
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />
      <button className='add-btn buttons' type="submit">{initialData ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ProductForm;
