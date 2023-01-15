import { Request, Response } from "express";
import { listAllProductsService } from "../../services/product/listAllProducts.service";

export const listAllProductsController = async (req: Request, res: Response) => {
  const includeDeleted = req.query.includeDeleted === "true";

  const productsList = await listAllProductsService(includeDeleted);

  return res.status(200).json(productsList);
};
