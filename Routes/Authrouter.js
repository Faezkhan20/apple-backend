import { Router } from "express";
import { Login, Register, getCurrentUser} from "../Controllers/Authcontroller.js";

const router=Router()

router.post("/login",Login)
router.post("/register",Register)
router.post('/getcurrentuser' , getCurrentUser)

export default router