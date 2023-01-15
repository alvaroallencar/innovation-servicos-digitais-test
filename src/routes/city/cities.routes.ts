import { Router } from "express";
import { listOneCityController } from "../../controllers/city/listOneCity.controller";

export const cityRoutes = Router();

cityRoutes.get("/", listOneCityController);
