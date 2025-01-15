import axios from 'axios';

const apiUrl = "https://0aee-27-4-237-103.ngrok-free.app/api/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(apiUrl,{headers: { "ngrok-skip-browser-warning": "true" }});
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    const response = await axios.post(apiUrl, product);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, product);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
