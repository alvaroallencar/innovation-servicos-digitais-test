import { AppDataSource } from "../../dataSource";
import { Product } from "../../entities/product/product.entity";
import { IProduct } from "../../interfaces/product/product.interface";

export const createProductService = async (data: IProduct) => {
  const { name, category, quantity } = data;

  const productRepository = AppDataSource.getRepository(Product);

  const newProduct = productRepository.create({
    name,
    category,
    quantity,
    status: "ACTIVE",
  });

  await productRepository.save(newProduct);

  return newProduct;
};
