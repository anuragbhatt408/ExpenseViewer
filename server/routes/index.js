import { Router } from "express";
import AuthApi from "./AuthApi.js";
import TransactionsApi from "./TransactionsApi.js";
import UserApi from "./UserApi.js";
import passport from "passport";
import CategoryApi from "./CategoryApi.js";

const router = Router();

router.use(
  "/transaction",
  passport.authenticate("jwt", { session: false }),
  TransactionsApi
);
router.use("/auth", AuthApi);
router.use("/user", UserApi);
router.use(
  "/category",
  passport.authenticate("jwt", { session: false }),
  CategoryApi
);

export default router;
