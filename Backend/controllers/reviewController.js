const db = require('../models')

//model
const Review = db.reviews;


//functions

//1. Add Review

const addReview = async (req, res) => {
  // Check if product_id is provided in the request body
  if (!req.body.product_id) {
    return res.status(400).json({ error: "product_id is required" });
  }

  // Validate the product_id (e.g., check if it exists in the database)

  // Proceed with creating the review if validation passes
  let data = {
    rating: req.body.rating,
    description: req.body.description,
    product_id: req.body.product_id,
  };

  try {
    const review = await Review.create(data);
    return res.status(200).send(review);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create review" });
  }
};

//2. Get All Reviews

const getAllReviews = async (req, res) => {

    const reviews = await Review.findAll({})
    res.status(200).send(reviews);
}

module.exports = {
    addReview,
    getAllReviews
}