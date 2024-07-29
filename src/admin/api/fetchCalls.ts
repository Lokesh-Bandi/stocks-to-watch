import axios from 'axios';

export const fetchCall = async (url: string) => {
  if (!url) {
    return null;
  }
  try {
    const response = await axios.get(url);
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error('Error fetching the action url');
  } catch (e) {
    console.log(e);
    return null;
  }
  return null;
};
