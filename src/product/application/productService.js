
import Product from "../domain/Product.js";
import {findCategorybyId} from "../../category/application/categoryService.js";
export const createProduct = async (productData, user) => {
  const { nameProduct, amount, price ,category} = productData;
  try {


    const categoryFound =await findCategorybyId(category);
    if (!categoryFound) { throw new Error("Categoría no encontrada");}

    const newProduct = new Product({
      nameProduct,
      amount,
      price,
      category:categoryFound._id,
      user: user.id,
    });

    const productSave = await newProduct.save();
    const populateProduct = await Product.findById(productSave._id).populate("user").populate("category");

    console.log(populateProduct);
    return populateProduct;
  } catch (error) {
    throw new Error("Error al crear el producto");
  }
};

export const getProducts = async (user) => {
  try {
    const productsFound = await Product.find({ user: user.id });
    return productsFound;
  } catch (error) {
    throw new Error("Error al obtener los productos");
  }
};

export const getProduct = async (productId, user) => {
  try {
    const productFound = await Product.findById({
      _id: productId,
      user: user.id,
    });
    return productFound;
  } catch (error) {
    throw new Error("Error al obtener el producto seleccionando");
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      productData,
      { new: true }
    );

    if (!updatedProduct) {
      return { error: "No se encontró el producto" };
    }

    return updatedProduct;
  } catch (error) {
    console.error("Error al editar el producto:", error.message);
    throw new Error("Error al editar el producto");
  }
};

export const DeletebyId = async (productid) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete({_id:productid});
    if (!deleteProduct)return { error: "No se encontró el producto" };
    return deleteProduct ;
  } catch (error) {
    throw new Error("Error al editar el producto");
  }
};
