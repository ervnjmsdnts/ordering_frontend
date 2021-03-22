import axios from 'axios';

const baseURL = 'http://megalord890.pythonanywhere.com/api/';

export const getCategory = async () => {
  try {
    const { data } = await axios.get(baseURL + 'category');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async () => {
  try {
    const { data } = await axios.get(baseURL + 'product');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getOrder = async () => {
  try {
    const { data } = await axios.get(baseURL + 'order');
    return data;
  } catch (error) {
    console.error(error);
  }
};
