import { Router } from "express";
import * as TransactionController from "../controllers/TransactionController.js";

const router = Router();

router.post("/", TransactionController.create);

router.get("/", TransactionController.index);

router.delete("/:id", TransactionController.destroy);

router.patch("/:id", TransactionController.update);

export default router;
