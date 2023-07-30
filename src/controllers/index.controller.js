/**poner .js para cuando se creen sus propios modulo
 * en caso de importar no es necesario
 */
import { pool }  from '../db.js';

export const ping = async (req, res) => {
    const [result] = await pool.query('select "Pong" AS resultado')
    res.json(result[0]);
}