
import { createPool } from "mysql2/promise";

/**se crea el objeto de conexion con la funcion, creatPool, es como 
 * el createconexion.
 * Se guarda en una constante llamada, pool.
*/

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Upm79@1A',
    port: 3306,
    database: 'empleadoApi'
})

/**pool, tiene un metodo llamado query */
//pool.query()