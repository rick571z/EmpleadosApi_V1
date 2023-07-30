import { Router } from "express";

import { ping } from '../controllers/index.controller.js';
 
/**creacion del enrutador */
const router = Router();

/**prueba conexion con bd*/
router.get('/ping',  ping);

export default router; 