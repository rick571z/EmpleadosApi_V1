import express from 'express';

/**creacion del servidor */
const app = express();

/**se importa el, router */
import empledoRoutes from './routes/empleados.routes.js';

/**se importa el, router */
import indexRoutes from './routes/index.routes.js';


/**utilizacion */
app.use(indexRoutes);
app.use(empledoRoutes);

app.listen(3500);
console.log('Server running on port 3500');


