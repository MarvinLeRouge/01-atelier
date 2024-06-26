import express from "express";
const router = express.Router()
import bookController from "../controllers/bookController.js";

router.get("/", bookController.findAll);
router.get("/:id", bookController.findById);
router.post("/", bookController.create)
export default router