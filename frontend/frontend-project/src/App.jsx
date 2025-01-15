import React, { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from './services/productService';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = async (productData) => {
    try {
      const newProduct = await createProduct(productData);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdateProduct = async (productData) => {
    try {
      const updatedProduct = await updateProduct(editingProduct.id, productData);
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id ? updatedProduct : product
        )
      );
      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductForm
        onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
        initialData={editingProduct}
      />
      <ProductList
        products={products}
        onEdit={setEditingProduct}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
}

export default App;
