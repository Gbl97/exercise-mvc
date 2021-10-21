const axios = require('axios');

const getCategories = async () => {
  const endpoint = `https://api.chucknorris.io/jokes/categories`;
  const categories = await axios.get(endpoint);
  const { data } = categories;

  return data;

};

module.exports = { getCategories };