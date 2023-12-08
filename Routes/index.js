import { Router } from "express";
import Authrouter from "./Authrouter.js"

const router=Router()

router.use("/auth",Authrouter)

export default router