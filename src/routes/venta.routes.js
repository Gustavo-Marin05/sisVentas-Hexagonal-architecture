import {Router} from "express";
import {ventaSave,getVentas,getVenta} from "../sale/infrastructure/venta.controller.js";
import { authRequired } from "../middleware/validateToken.js";


const router =Router();

router.post('/createVenta',authRequired,ventaSave);//se crea la venta
router.get('/ventas',authRequired,getVentas);//nos dara todas las ventas hechas por el usuario
router.get('/venta/:id',authRequired,getVenta)//nos dara una sola venta seleccionada con el id



export default router;
