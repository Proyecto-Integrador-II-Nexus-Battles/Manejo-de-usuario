import { Router } from "express"
import { defaultR, defaultR3, defaultR4, login, registro, obtenerNombresDeUsuario } from "../controllers/testing.controllers.js"

const router = Router();
router.get('/', defaultR);
router.get('/admin', obtenerNombresDeUsuario);
router.get('/user', defaultR3);
router.get('/register', defaultR4);
router.post('/registro', registro);
router.post('/logging', login);

export default router;