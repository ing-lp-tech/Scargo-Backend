const express = require("express");
const {
  getCortesByIdController,
  getAllCortesController,
  postCortesController,
  deleteCortesController,
} = require("../controllers/cortesController");
const authMiddleware = require("../middlewares/authMiddleware");

const cortesRouter = express.Router();

cortesRouter.get("/", getAllCortesController);

cortesRouter.post("/", postCortesController);

cortesRouter.delete("/:pid", deleteCortesController);

cortesRouter.get("/:pid", getCortesByIdController);

module.exports = cortesRouter;
