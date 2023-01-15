import { Request, Response } from "express";
import { IProduct } from "../../interfaces/product/product.interface";
import { updateProductService } from "../../services/product/updateProduct.service";

export const updateProductController = async (req: Request, res: Response) => {
  const body: IProduct = req.body;
  const productId = req.params.id;

  const updatedProduct = await updateProductService(productId, body);

  return res.status(200).json(updatedProduct);
};
