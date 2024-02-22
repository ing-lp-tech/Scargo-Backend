const express = require("express");
const { postMailController } = require("../controllers/contactController");
const authMiddleware = require("../middlewares/authMiddleware");

const contactRouter = express.Router();

contactRouter.post("/", postMailController);

module.exports = contactRouter;
