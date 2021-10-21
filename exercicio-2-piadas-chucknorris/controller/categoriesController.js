const categoriesModel = require('../models/category');

const listCategories = async (_req, res) => {
  const categories = await categoriesModel.getCategories();
  return res.status(200).render('categories/index.ejs', { categories });
};

module.exports = { listCategories };