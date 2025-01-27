import app from './app.js';
import {conectDB} from './db.js';
conectDB();

// Utiliza el puerto asignado por un servicio en la nube si es que se sube como api o escuchara el purto 4000 por defecto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
