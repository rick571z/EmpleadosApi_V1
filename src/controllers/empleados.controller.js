/**importacion el pool para la conexion con la bd */
import { pool } from '../db.js';

export const getEmpleados = (req, res) => res.send('Obteniendo empleados');

export const createEmpleados = async(req, res) => {
    console.log(req.body);
    const {name, salario} = req.body;
    //obtiene la fila insertada
    const [rows] = await pool.query('Insert into empleado (name, salario) Values (?,?)', [name, salario])
    res.send({
        id:rows.insertId,
        name,
        salario
    });
}

export const updateEmpleados = (req, res) => res.send('Actualizando empleados');

export const deleteEmpleados = (req, res) => res.send('Eliminando empleados');