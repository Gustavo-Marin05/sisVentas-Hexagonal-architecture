import { Router } from "express";
import { productSave ,products,product, ProductUpdate,productDelete} from "../product/infrastructure/product.controller.js";
import { authRequired } from "../middleware/validateToken.js";

const router = Router();

router.post('/createProducts',authRequired,productSave);//se crea el producto 
router.get('/products',authRequired,products);//obtiene todos los productos
router.get('/product/:id',authRequired,product)//obtiene solo un producto con su id
router.put('/productUp/:id',authRequired,ProductUpdate);//editara el producto
router.delete('/productDe/:id',authRequired,productDelete);//eliminara el producto



export default router;
