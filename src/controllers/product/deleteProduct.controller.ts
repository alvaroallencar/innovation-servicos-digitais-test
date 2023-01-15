import { Request, Response } from "express";
import { deleteProductService } from "../../services/product/deleteProduct.service";

export const deleteProductController = async (req: Request, res: Response) => {
  const productId = req.params.id;

  await deleteProductService(productId);

  return res.status(204).send();
};
