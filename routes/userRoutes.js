import express from "express";
const router = express.Router()
import userController from "../controllers/userController.js";

router.get("/", userController.findAll);
router.get("/:id", userController.findById);

export default router