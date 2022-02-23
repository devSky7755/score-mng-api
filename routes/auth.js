import express from "express";
import { Register, Login, Logout } from "../controllers/auth/users.js";
import { refreshToken } from "../controllers/auth/refresh_token.js";

const authRouter = express.Router();

authRouter.post('/login', Login);
authRouter.post('/register', Register);
authRouter.get('/refreshtoken', refreshToken);
authRouter.delete('/logout', Logout);

export default authRouter;