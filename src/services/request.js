import axios from "axios";
const request = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default request;
