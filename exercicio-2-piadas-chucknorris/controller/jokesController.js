const jokeModel = require('../models/joke');

const showJoke = async (_req, res) => {
  const joke = await jokeModel.getJoke();
  return res.status(200).render('jokes/jokeView', { joke });
};

const showJokeByCategory = async (req, res) => {
  const { category } = req.params;
  const joke = await jokeModel.getJokeByCategory(category);
  return res.status(200).render('jokes/jokeByCategoryView', { joke });
};

module.exports = {
  showJoke,
  showJokeByCategory,
}