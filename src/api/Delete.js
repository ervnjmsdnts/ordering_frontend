import axios from 'axios';

const baseURL = 'http://megalord890.pythonanywhere.com/api/';

export const deleteItem = async (api, id) => {
  try {
    const response = await axios.delete(baseURL + `${api}/${id}`);
    window.location.reload();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
