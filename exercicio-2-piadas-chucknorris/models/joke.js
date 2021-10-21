const axios = require('axios');

const getJoke = async () => {
  const endpoint = `https://api.chucknorris.io/jokes/random`;
  const { data } = await axios.get(endpoint);
  const { value } = data;
  const joke = value;

  return joke;
};

const getJokeByCategory = async (category) => {
  const endpoint = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const { data } = await axios.get(endpoint);
  const { value } = data;
  const joke = value;

  return joke;
};

module.exports = {
  getJoke,
  getJokeByCategory
};