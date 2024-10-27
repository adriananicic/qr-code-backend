import express from "express";
import authRoute from "../controllers/auth/auth";

const authRouter = express.Router();

authRouter.get("/token", authRoute);

export default authRouter;
