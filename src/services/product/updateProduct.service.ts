import { AppDataSource } from "../../dataSource";
import { Product } from "../../entities/product/product.entity";
import { AppError } from "../../errors/appError";
import { IProduct } from "../../interfaces/product/product.interface";

export const updateProductService = async (id: string, data: IProduct) => {
  if (Object.keys(data).includes("status")) {
    throw new AppError("You cannot change product status");
  }

  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOneBy({ id });

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  await productRepository.save({
    ...product,
    name: data.name ? data.name : product.name,
    category: data.category ? data.category : product.category,
    quantity: data.quantity ? data.quantity : product.quantity,
  });

  const updatedProduct = await productRepository.findOneBy({ id });

  return updatedProduct;
};
