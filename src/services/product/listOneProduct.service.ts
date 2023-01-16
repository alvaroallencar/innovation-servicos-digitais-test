import { AppDataSource } from "../../dataSource";
import { Product } from "../../entities/product/product.entity";
import { AppError } from "../../errors/appError";

export const listOneProductService = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOneBy({ id });

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  return product;
};
