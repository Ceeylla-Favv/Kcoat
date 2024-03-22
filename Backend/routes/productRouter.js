// productRouter.js
//importing controllers for review and products
const {addProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct, getPublishedProduct, getProductReviews} = require('../controllers/productController.js');
const {addReview,getAllReviews} = require("../controllers/reviewController.js");

//import router
const router = require('express').Router();


//use routers
router.post('/addProduct', addProduct);

router.get('/allProduct', getAllProducts);

router.get('/published', getPublishedProduct);


//Review url and Controllers

router.post('/addReview', addReview)
router.get('/allReviews', getAllReviews)


// get product Reviews
router.get('/getProductReviews', getProductReviews)




//products router
router.get('/:id', getOneProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
