import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", price: "" });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = "https://0aee-27-4-237-103.ngrok-free.app/api/products";

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrl, { headers: { 'ngrok-skip-browser-warning': 'true' } });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]); // Set to an empty array if the API call fails
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? parseFloat(value) || "" : value,
    });
  };

  // Add a new product
  const addProduct = async () => {
    if (!formData.name || !formData.description || !formData.price) {
      alert("All fields are required!");
      return;
    }
    try {
      const response = await axios.post(apiUrl, formData);
      setProducts([...products, response.data]);
      setFormData({ name: "", description: "", price: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Edit an existing product
  const editProduct = (product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  const updateProduct = async () => {
    if (!formData.name || !formData.description || !formData.price) {
      alert("All fields are required!");
      return;
    }
    try {
      const response = await axios.put(`${apiUrl}/${editingId}`, formData);
      setProducts(
        products.map((product) =>
          product.id === editingId ? response.data : product
        )
      );
      setFormData({ name: "", description: "", price: "" });
      setEditingId(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Form to add or edit products */}
      <div>
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
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button onClick={editingId ? updateProduct : addProduct}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* Product List */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.description} - ${product.price}
            <button onClick={() => editProduct(product)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
