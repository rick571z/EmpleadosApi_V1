
/**se importa un moduolo de express, Router para 
 * crear rutas
 */
import { Router } from "express";
import { getEmpleados, createEmpleados, updateEmpleados, deleteEmpleados } from '../controllers/empleados.controller.js';

const router = Router();

/**rutas */
router.get('/employess', getEmpleados)
router.post('/employess', createEmpleados)
router.put('/employess', updateEmpleados)
router.delete('/employess', deleteEmpleados)


export default router;