import { CreatebyId ,delteById,getCategories, updateById} from "../application/categoryService.js";


// crea una categoria
export const CategorySave =async(req,res)=>{
    try {
        const category= await CreatebyId(req.body,req.user);
        res.json(category);
    } catch (error) {
        res.status(400).json(["error al crear la categoria"]);
    }

}

//nos muestra todas las categorias
export const Categories =async (req,res)=>{
    try {
        const category =await getCategories(req.user)
        res.status(200).json(category);
        
    } catch (error) {
        res.status(400).json(["error al encontrar las categorias"]);
    }
}

// edita una categoria 

export const CategoryUp =async (req,res)=>{
    try {
        const {id}=req.params;
        const category =await updateById(id,req.body);
        res.json(category);
    } catch (error) {
        res.status(400).json(["error al editar la categoria"]);
    }
}



//delete category
export const CategoryDe =async (req,res)=>{

    try {
        const {id}=req.params;
        const category =await delteById(id);
        res.json(category);
    } catch (error) {
        res.status(400).json(["error al borrar la categoria"]);
    }
}