const express = require("express");
const router = express.Router();
const product = require("../controllers/product.controller.js");

router.get("/", product.all);
router.get("/:id", product.find);
router.post("/", product.add);
router.put("/:id", product.update);
router.delete("/:id", product.drop);

module.exports = router;
