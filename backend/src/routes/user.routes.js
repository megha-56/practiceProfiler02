import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import verifyToken from "../middleware/user.middleware.js";


const router=Router();

router.post('/register',registerUser);

export default router;