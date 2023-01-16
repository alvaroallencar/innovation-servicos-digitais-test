import { Request, Response } from "express";
import { listOneProductService } from "../../services/product/listOneProduct.service";

export const listOneProductController = async (req: Request, res: Response) => {
  const productId = req.params.id;

  const product = await listOneProductService(productId);

  return res.status(200).json(product);
};
