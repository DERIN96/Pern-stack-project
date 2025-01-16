import axios from 'axios';

const apiUrl = "https://1d40-27-5-244-186.ngrok-free.app/api/products";
const apiConfig = {headers: { "ngrok-skip-browser-warning": "true" }};

export const getProducts = async () => {
  try {
    const response = await axios.get(apiUrl,apiConfig);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    console.log(product);
    const response = await axios.post(apiUrl, product,apiConfig);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, product,apiConfig);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`,apiConfig);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
