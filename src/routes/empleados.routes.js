
/**se importa un moduolo de express, Router para 
 * crear rutas
 */
import { Router } from "express";

const router = Router();

/**rutas */
router.get('/employess', (req, res) => res.send('Obteniendo empleados'))
router.post('/employess', (req, res) => res.send('Creando empleados'))
router.put('/employess', (req, res) => res.send('Actualizando empleados'))
router.delete('/employess', (req, res) => res.send('Eliminando empleados'))


export default router;