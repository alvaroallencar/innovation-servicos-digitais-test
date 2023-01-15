import { AppDataSource } from "../../dataSource";
import { City } from "../../entities/city/city.entity";
import { AppError } from "../../errors/appError";
import { toLowerCaseAndRemoveSpecialChars } from "../../utils/toLowerCaseAndRemoveSpecialChars";
import { getRioDeJaneiroCities } from "./getRioDeJaneiroCities.service";

export const registerCityService = async (cityName: string) => {
  const cityRepository = AppDataSource.getRepository(City);

  const ibgeCities = await getRioDeJaneiroCities();

  if (!ibgeCities) {
    throw new AppError("Could not fetch cities on IBGE", 500);
  }

  const foundIbgeCity = ibgeCities.find(
    (city) => cityName === toLowerCaseAndRemoveSpecialChars(city.nome)
  );

  if (!foundIbgeCity) {
    throw new AppError("City not found", 404);
  }

  const { id, nome } = foundIbgeCity;

  const registeredCity = cityRepository.create({
    id,
    name: nome,
  });

  await cityRepository.save(registeredCity);

  return registeredCity;
};
