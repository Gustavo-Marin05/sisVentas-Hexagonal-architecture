import PDFDocument from 'pdfkit';
import fs from 'fs';
import Invoice from "../domain/invoice.model.js";
import { FindProductById } from "../../product/application/productService.js";

export const createdInvoice = async (invoiceData, user) => {
  try {
    const { products } = invoiceData;
    if (!products || !Array.isArray(products) || products.length === 0) {
      throw new Error("El campo products debe contener al menos un producto.");
    }

    let totalAmount = 0;
    const productList = [];

    for (const item of products) {
      if (!item.product || !item.quantity || item.quantity <= 0) {
        throw new Error(
          "Cada producto debe tener un ID válido y una cantidad mayor a 0."
        );
      }
    }

    const productFind=await FindProductById(item.product);
    if(!productFind) return [`el producto ${item.product} no fue encontrado`];

    totalAmount += productFind.price * item.quantity;

    productList.push({
        product:item.product,
        quantity:item.quantity,
        price:productFind.price
    });


    const invoice =new Invoice({
        user:user._id,
        clientname:clientname|| 'anonymus',
        products:productList,
        amount:totalAmount,
        description:invoiceData.description||'',
        status:invoiceData.status||'unpaid'
    });

    const invoiceSave=await invoice.save();
    const pdf=generatePDFinvoice(invoiceData);

    imprimirpdf(invoice);
    return invoiceSave;





  } catch (error) {
    throw new Error("Error al crear la factura ");
  }
};


const generatePDFinvoice=(invoice)=>{
    const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(`./invoices/invoice_${invoice._id}.pdf`));

  doc.fontSize(20).text(`Invoice #${invoice._id}`, { align: 'center' });

  doc.text(`User: ${invoice.user}`, { align: 'left' });
  doc.text(`Date: ${new Date(invoice.createdAt).toLocaleDateString()}`, { align: 'left' });

  doc.moveDown();
  doc.fontSize(15).text('Products:');

  invoice.products.forEach((product, index) => {
    doc.text(`${index + 1}. Product ID: ${product.product}, Quantity: ${product.quantity}, Price: $${product.price}`);
  });

  doc.text(`Total Amount: $${invoice.amount}`, { align: 'right' });

  doc.end();
}


const imprimirpdf= (invoice) => {
    const device = new escpos.USB();
    const printer = new escpos.Printer(device);
  
    device.open(() => {
      printer
        .align('CT')
        .text(`Invoice #${invoice._id}`)
        .text(`User: ${invoice.user}`)
        .text(`Client: ${invoice.clientName}`)
        .text(`Date: ${new Date(invoice.createdAt).toLocaleDateString()}`)
        .text('Products:')
  
      invoice.products.forEach((product, index) => {
        printer.text(`${index + 1}. Product ID: ${product.product}, Quantity: ${product.quantity}, Price: $${product.price}`);
      });
  
      printer
        .text(`Total Amount: $${invoice.amount}`)
        .cut()
        .close();
    });
  };