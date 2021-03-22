import axios from 'axios';

const baseURL = 'http://megalord890.pythonanywhere.com/api/';

export const postCategory = async (data) => {
  try {
    const response = await axios.post(baseURL + 'category/', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const postProduct = async (data) => {
  try {
    const response = await axios.post(baseURL + 'product/', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const postOrder = async (data) => {
  try {
    const response = await axios.post(baseURL + 'order/', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
