module.exports = app => {
  const Foods = require("../controllers/food.controller.js");

  var router = require("express").Router();

  // Create a new Food
  router.post("/", Foods.create);

  // Retrieve all Foods
  router.get("/", Foods.findAll);

  // Retrieve all published Foods
  router.get("/published", Foods.findAllPublished);

  // Retrieve a single Food with id
  router.get("/:id", Foods.findOne);

  // Update a Food with id
  router.put("/:id", Foods.update);

  // Delete a Food with id
  router.delete("/:id", Foods.delete);

  // Create a new Food
  router.delete("/", Foods.deleteAll);

  app.use("/api/Foods", router);
};
