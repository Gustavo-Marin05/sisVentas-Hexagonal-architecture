import express from "express";
import { FindProductById } from "../../product/application/productService.js";
import Sale from "../domain/Venta.model.js";

export const createVenta = async (ventaData, user) => {
  const { products } = ventaData;
  if (!products || !Array.isArray(products) || products.length === 0) {
    return ["El campo products debe contener al menos un producto."];
  }

  let totalAmount = 0;
  const productList = [];

  for (const item of products) {
    if (!item.product || !item.quantity || item.quantity <= 0) {
      return [
        "Cada producto debe tener un ID válido y una cantidad mayor a 0.",
      ];
    }

    const productFind = await FindProductById(item.product);
    if (!productFind) return ["producto no encontrado"];

    totalAmount += productFind.price * item.quantity;

    //el push agrega un nuevo producto al ultimo de este array
    productList.push({
      product: item.product,
      quantity: item.quantity,
    });
  }

  const venta = new Venta({
    user: user.id,
    products: productList,
    totalAmount,
  });

  const ventaSave = await venta.save();

  return ventaSave;
};

//obtenemos todas la ventas del usuario
export const getAllVentas = async (user) => {
  try {
    const ventaFound = await Sale.find({ user: user.id });
    return ventaFound;
  } catch (error) {
    throw new Error("Error al obtener las ventas");
  }
};


//obtener una sola venta con el id

export const getVentaById=async (ventaId,user)=>{

    try {
        const ventaFound=await Sale.findById({_id:ventaId,user:user.id});
        return ventaFound;
    } catch (error) {
      throw new Error("Error al obtener la venta seleccionanda");
        
    }
}


//
