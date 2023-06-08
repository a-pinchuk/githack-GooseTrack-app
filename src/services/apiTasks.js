import { instance } from 'redux/auth/operations';

export const fetchTaskById = async id => {
  try {
    const response = await instance.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    return false;
  }
};
