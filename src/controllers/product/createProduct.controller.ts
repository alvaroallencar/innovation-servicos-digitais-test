import { Request, Response } from "express";
import { IProduct } from "../../interfaces/product/product.interface";
import { createProductService } from "../../services/product/createProduct.service";

export const createProductController = async (req: Request, res: Response) => {
  const body: IProduct = req.body;

  const createdProduct = await createProductService(body);

  return res.status(201).json(createdProduct);
};
