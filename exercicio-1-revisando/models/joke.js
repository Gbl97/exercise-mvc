const axios = require('axios');

const getJokes = async () => {
  const endpoint = `https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single`;
  const { data } = await axios.get(endpoint);
  const { joke } = data;

  return joke ;
};

module.exports = { getJokes };