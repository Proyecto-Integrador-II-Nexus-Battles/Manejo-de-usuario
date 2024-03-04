import { Router } from "express"
import { defaultR, defaultR4, login, registro, getUsername, buscarUsername, getUserInfoController } from "../controllers/testing.controllers.js"

const router = Router();
router.get('/', defaultR);
router.get('/admin', getUsername);
router.get('/buscar_usuario', buscarUsername);
router.get('/:username', getUserInfoController);
router.get('/register', defaultR4);
router.post('/registro', registro);
router.post('/logging', login);

export default router;