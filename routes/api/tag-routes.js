const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [Product],
    });
    return res.json(tagData);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findOne({
      where: { id: req.params.id },
      include: [Product],
    });
    return res.json(tagData);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create({ category_name: req.body.tag_name });
    return res.json(newTag);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = Tag.update(
      { tag_name: req.body.tag_name },
      { where: { id: req.params.id } }
    );
    return res.json(tagData);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const delTag = await Tag.destroy({ where: { id: req.params.id } });
    return res.json(delTag);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
