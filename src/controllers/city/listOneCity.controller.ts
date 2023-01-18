import { Request, Response } from "express";
import { listOneCityService } from "../../services/city/listOneCity.service";

export const listOneCityController = async (req: Request, res: Response) => {
  const cityName = req.params.name;

  const city = await listOneCityService(cityName);

  return res.status(200).json(city);
};
