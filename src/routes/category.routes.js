import { Router } from "express";
import {
  Categories,
  CategoryDe,
  CategorySave,
  CategoryUp,
} from "../category/infrastructure/category.controller.js";
import { authRequired } from "../middleware/validateToken.js";

const router = Router();

router.post("/createCategory", authRequired, CategorySave); //creacion de la categoria
router.get("/categories", authRequired, Categories); //obtendremos las todas las categorias de un usuario
router.put("/categoryUp/:id", authRequired, CategoryUp); //editar una categoria
router.delete("/categoryDe/:id", authRequired, CategoryDe); //elimina una categoria

export default router;
