const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({
      include: [Product],
    });
    return res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const data = await Category.findOne({
      where: { id: req.params.id },
      include: [Product],
    });
    return res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    return res.json(newCategory);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  try {
    const catData = Category.update(
      { category_name: req.body.category_name },
      { where: { id: req.params.id } }
    );
    return res.json(catData);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const delCat = await Category.destroy({ where: { id: req.params.id } });
    return res.json(delCat);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
