import { Router } from "express"
import { defaultR, defaultR3, defaultR4, login, registro, GetUsername, BuscarUsername } from "../controllers/testing.controllers.js"

const router = Router();
router.get('/', defaultR);
router.get('/admin', GetUsername);
router.get('/buscar_usuario', BuscarUsername);
router.get('/user', defaultR3);
router.get('/register', defaultR4);
router.post('/registro', registro);
router.post('/logging', login);

export default router;