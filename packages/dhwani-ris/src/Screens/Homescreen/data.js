import axios from 'axios';

export const listUsers = async (page_no = 1) => {
  try {
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${page_no}`
    );
    // const { data } = await axios.get('https://randomuser.me/api?results=50');
    const response = data.data;
    console.log('data', response);
    return response;
  } catch (err) {
    console.error(err);
  }
};
