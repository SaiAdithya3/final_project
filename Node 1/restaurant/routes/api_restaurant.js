
const express = require("express");
const controller = require("../controllers/restaurant");

const router = express.Router();

router.get("/Filter", controller.filterRestaurant);

router.post("/", controller.addRestaurant);
router.get("/", controller.getRestaurant);
router.get("/location/:loc", controller.getRestaurantByLocation);

router.get("/:id", controller.getRestaurantByID);

router.put("/", controller.updateRestaurant);

router.delete("/:id", controller.deleteRestaurant);
router.get("/search/:key", controller.searchRestaurant);




module.exports = router;