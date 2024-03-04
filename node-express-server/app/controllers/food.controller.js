const db = require("../models");
const Food = db.Foods;

// Create and Save a new Food
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Food
  const Food = new Food({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Food in the database
  Food
    .save(Food)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Food."
      });
    });
};

// Retrieve all Foods from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Food.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Foods."
      });
    });
};

// Find a single Food with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Food.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Food with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Food with id=" + id });
    });
};

// Update a Food by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Food.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Food with id=${id}. Maybe Food was not found!`
        });
      } else res.send({ message: "Food was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Food with id=" + id
      });
    });
};

// Delete a Food with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Food.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Food with id=${id}. Maybe Food was not found!`
        });
      } else {
        res.send({
          message: "Food was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Food with id=" + id
      });
    });
};

// Delete all Foods from the database.
exports.deleteAll = (req, res) => {
  Food.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Foods were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Foods."
      });
    });
};

// Find all published Foods
exports.findAllPublished = (req, res) => {
  Food.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Foods."
      });
    });
};
