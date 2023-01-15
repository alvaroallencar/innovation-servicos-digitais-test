import { AppDataSource } from "../../dataSource";
import { Product } from "../../entities/product/product.entity";

export const listAllProductsService = async () => {
  const productRepository = AppDataSource.getRepository(Product);

  const productsList = await productRepository.find({
    order: {
      name: "ASC",
    },
  });

  return productsList;
};
