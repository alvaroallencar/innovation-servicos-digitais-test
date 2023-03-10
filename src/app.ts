import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";
import cors from "cors";
import { productRoutes } from "./routes/product/products.routes";
import { cityRoutes } from "./routes/city/cities.routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
app.use("/cities", cityRoutes);
app.use(handleErrorMiddleware);

export { app };
