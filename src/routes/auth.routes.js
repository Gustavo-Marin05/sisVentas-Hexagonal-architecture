import { Router } from "express";
import { register ,login,logout,profile, profileDelete} from "../auth/infrastructure/auth.controller.js";
import { authRequired } from "../middleware/validateToken.js";
 
const router =Router()

router.post('/register', register);
router.post('/login',login);
router.post('/logout',logout);
router.get('/profile',authRequired,profile);
router.delete('/delteProfile/:id',authRequired,profileDelete);
//podria trabajar despues en editprofile




export default router;

