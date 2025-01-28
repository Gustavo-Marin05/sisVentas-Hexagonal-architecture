import { createdInvoice } from "../application/invoiceService.js";


export const Invoice =async(req,res)=>{
    try {
        const invoice= await createdInvoice(req.body, req.user);
        res.status(200).json(invoice);
    } catch (error) {
        res.status(400).json('erroe en createInvoice');
    }

}