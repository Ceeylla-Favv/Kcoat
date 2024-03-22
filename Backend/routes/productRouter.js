// productRouter.js
//importing controllers for review and products
const productController = require('../controllers/productController.js');
const reviewController = require("../controllers/reviewController.js")

//import router
const router = require('express').Router();


//use routers
router.post('/addProduct', productController.addProduct);

router.get('/allProduct', productController.getAllProducts);

router.get('/published', productController.getPublishedProduct);


//Review url and Controllers

router.post('/addReview', reviewController.addReview)
router.get('/allReviews', reviewController.getAllReviews)


// get product Reviews
router.get('/getProductReviews', productController.getProductReviews)




//products router
router.get('/:id', productController.getOneProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
