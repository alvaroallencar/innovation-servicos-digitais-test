import { AppDataSource } from "../../dataSource";
import { AppError } from "../../errors/appError";
import { Product } from "../../entities/product/product.entity";

export const deleteProductService = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOneBy({ id });

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  await productRepository.save({
    ...product,
    status: "INACTIVE",
    deleted_at: new Date(),
  });

  return;
};
