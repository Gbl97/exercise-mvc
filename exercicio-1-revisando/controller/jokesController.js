const jokeModel = require('../models/joke');

const listJokes = async (_req, res) => {
  const joke = await jokeModel.getJokes();

  return res.status(200).render('jokeVew', { joke });
};

module.exports = {
  listJokes,
};