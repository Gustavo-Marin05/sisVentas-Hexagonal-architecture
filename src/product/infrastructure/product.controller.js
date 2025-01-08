import { createProduct,getProducts,getProduct ,updateProduct,DeletebyId} from "../application/productService.js";


export const productSave = async (req, res) => {
    try {
        const product=await createProduct(req.body,req.user);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(["error en create product"]);
    }

};

export const products=async (req,res)=>{
    try {
        const product=await getProducts(req.user) ;
        res.status(200).json(product);
        
    } catch (error) {
        res.status(400).json(["error al obtener los productos"]);
    }
}

export const product =async (req,res)=>{
    try {
        const {id}=req.params;
        const product =await getProduct(id,req.user);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(400).json(["error al obtener el producto seleccionando"]);
    }
}

export const ProductUpdate= async(req,res)=>{
    try {
        const {id}=req.params;
        const product =await updateProduct(id,req.body);
        res.json(product);
    } catch (error) {
        //console.error("Error en ProductUpdate:", error.message);
        res.status(400).json(["error al editar el producto"]);
    }


}

export const productDelete=async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await DeletebyId(id);
        res.json(product);
    } catch (error) {
        res.status(400).json(["error al borrar el producto"]);
    }

}
