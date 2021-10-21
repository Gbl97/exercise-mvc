const categoriesModel = require('../models/category');

const listCategories = async (_req, res) => {
  const categories = await categoriesModel.getCategories();
  return res.status(200).render('categories/index.ejs', { categories });
};

const redirectCategories = async (_req, res) => {
  return res.redirect('/categories');
};

module.exports = { listCategories, redirectCategories };