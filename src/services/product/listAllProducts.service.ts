import { AppDataSource } from "../../dataSource";
import { Product } from "../../entities/product/product.entity";

export const listAllProductsService = async (includeDeleted: boolean) => {
  const productRepository = AppDataSource.getRepository(Product);

  if (includeDeleted) {
    const productsList = await productRepository.find({
      withDeleted: true,
      order: {
        name: "ASC",
      },
    });

    return productsList;
  }

  const productsList = await productRepository.find({
    order: {
      name: "ASC",
    },
  });

  return productsList;
};
