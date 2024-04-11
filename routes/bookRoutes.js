import express from "express";
const router = express.Router()
import bookController from "../controllers/bookController.js";

router.get("/book", bookController.findAll);
router.get("/book/:id", bookController.findById);

export default router