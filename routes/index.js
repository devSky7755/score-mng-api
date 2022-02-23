import express from "express";
import authRouter from "./auth.js";
import securedRouter from "./secured.js";

import { verifyToken } from "../middleware/verify_token.js";

const router = express.Router();

router.use('/auth', authRouter);
router.use('/secured', verifyToken, securedRouter);


export default router;