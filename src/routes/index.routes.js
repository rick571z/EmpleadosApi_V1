import { Router } from "express";
/**poner .js para cuando se creen sus propios modulo
 * en caso de importar no es necesario
 */
import { pool }  from '../db.js';
 
/**creacion del enrutador */
const router = Router();

/**prueba conexion con bd*/
router.get('/ping', async (req, res) => {
    const [result] = await pool.query('select "Pong" AS resultado')
    res.json(result[0]);
});

export default router; 