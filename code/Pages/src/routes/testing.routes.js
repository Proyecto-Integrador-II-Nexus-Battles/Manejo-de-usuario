import { Router } from "express"
import { defaultR, defaultR2, defaultR3, defaultR4} from "../controllers/testing.controllers.js"

const router = Router();
router.get('/', defaultR);
router.get('/hola', defaultR2);
router.get('/user', defaultR3);
router.get('/register', defaultR4);


export default router