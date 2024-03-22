const db = require('../models')

//create main Model
const Product = db.products
const Review = db.reviews

//main work

//1. Create Product

const addProduct = async (req, res) => {
  try {
    // Check if title is provided
    if (!req.body.title) {
      return res.status(400).send({ message: "Title is required" });
    }

    // Create product
    let info = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
    };

    const product = await Product.create(info);
    res.status(200).send(product); // Use 200 for successful creation
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send("Internal server error");
  }
};


//2. get all products

const getAllProducts = async (req, res) => {
    
    let products = await Product.findAll({})
    res.status(200).send(products)
}

//3. get single product

const getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.findOne({where: {id: id}})
    res.status(200).send(product)
}




// 4. update product
const updateProduct = async (req, res) => {
    let id = req.params.id;
    try {
        const product = await Product.update(req.body, { where: { id: id } });
        res.status(200).send(product);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send('Internal server error');
    }
}


//5. delete product by id

const deleteProduct = async (req, res) => {
    let id = req.params.id

    await Product.destroy({where: { id: id}})

    res.status(200).send('Product is deleted!')

}


// 6. get Published product
const getPublishedProduct = async (req, res) => {
    try {
        const products = await Product.findAll({ where: { published: true } });
        res.status(200).send(products);
    } catch (error) {
        console.error('Error fetching published products:', error);
        res.status(500).send('Internal server error');
    }
}

//7. connect one to many relation Product and Reviews

// 7. Get all products with their reviews
const getProductReviews = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Review,
          as: "review",
        },
      ],
    });
    res.status(200).send(products);
  } catch (error) {
    console.error("Error fetching products with reviews:", error);
    res.status(500).send("Internal server error");
  }
};



module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReviews
}