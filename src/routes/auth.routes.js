import { Router } from "express";
import { register ,login,logout} from "../auth/infrastructure/auth.controller.js";
 
const router =Router()

router.post('/register', register);
router.post('/login',login);
router.post('/logout',logout)


export default router;

