import { Request, Response } from "express";
import { listAllProductsService } from "../../services/product/listAllProducts.service";

export const listAllProductsController = async (req: Request, res: Response) => {
  const productsList = await listAllProductsService();

  return res.status(200).json(productsList);
};
