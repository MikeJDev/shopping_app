const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router
  .route("/items")
  .get(controllers.getAllItems)
  .post(controllers.createItem);
router
  .route("/:id")
  .put(controllers.updateItem)
  .delete(controllers.deleteItem);
module.exports = router;