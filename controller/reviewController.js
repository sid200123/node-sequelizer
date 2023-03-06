const db = require("../models/reviewmodel");

const addReview = async (req, resp) => {
  let data = await db.create(req.body);
  resp.status(201).json(data);
};

const getAllReview = async (req, resp) => {
  let data = await db.findAll();
  resp.json(data);
};

module.exports = {
  addReview,
  getAllReview,
};
