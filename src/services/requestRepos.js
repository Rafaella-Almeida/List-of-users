import axios from "axios";
const requestRepos = async (user) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default requestRepos;
