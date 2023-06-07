import axios from 'axios';

export const fetchTaskById = async id => {
  try {
    const response = await axios.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    return false;
  }
};
