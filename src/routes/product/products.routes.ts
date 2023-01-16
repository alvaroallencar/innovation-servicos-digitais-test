import { Router } from "express";
import { createProductController } from "../../controllers/product/createProduct.controller";
import { deleteProductController } from "../../controllers/product/deleteProduct.controller";
import { listAllProductsController } from "../../controllers/product/listAllProducts.controller";
import { listOneProductController } from "../../controllers/product/listOneProduct.controller";
import { updateProductController } from "../../controllers/product/updateProduct.controller";
import { validadeSerializerMiddleware } from "../../middlewares/validateSerializer.middleware";
import {
  createProductSerializer,
  updateProductSerializer,
} from "../../serializers/product/product.serializer";

export const productRoutes = Router();

productRoutes.post(
  "/",
  validadeSerializerMiddleware(createProductSerializer),
  createProductController
);
productRoutes.get("/", listAllProductsController);
productRoutes.get("/:id", listOneProductController);
productRoutes.patch(
  "/:id",
  validadeSerializerMiddleware(updateProductSerializer),
  updateProductController
);
productRoutes.delete("/:id", deleteProductController);
