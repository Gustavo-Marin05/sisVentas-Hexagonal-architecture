import { createVenta, getAllVentas, getVentaById } from "../application/ventaService.js";

export const ventaSave = async (req, res) => {
  try {
    const venta = await createVenta(req.body, req.user);
    res.status(200).json(venta);
  } catch (error) {
    res.status(400).json(["error en createVenta"]);
  }
};


export const getVentas =async (req,res)=>{
    try {
        const venta = await getAllVentas(req.user);
        res.status(200).json(venta);
    } catch (error) {
        res.status(400).json(["error al obtener las ventas"]);
    }
};

export const getVenta=async(req,res)=>{
  try {
    const {id}=req.params;
    const venta = await getVentaById(id,req.user);
    res.status(200).json(venta);
  } catch (error) {
    res.status(400).json(["error en getventabyid"]);
  }
}