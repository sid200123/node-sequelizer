// import controllers review, products
const productController = require("../controller/productController");
const reviewController = require("../controller/reviewController");

// router
const router = require("express").Router();

// use routers
router.post(
  "/addProduct",
  productController.upload,
  productController.addProduct
);

router.get("/allProducts", productController.getAllProducts);

router.get("/published", productController.getPublishedProduct);

// Review Url and Controller

router.get("/allReviews", reviewController.getAllReview);
router.post("/addReview/:id", reviewController.addReview);

// get product Reviews
router.get("/getProductReviews/:id", productController.getProductReviews);

// Products router
router.get("/:id", productController.getOneProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
