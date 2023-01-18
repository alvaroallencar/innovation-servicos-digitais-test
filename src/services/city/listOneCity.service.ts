import { AppDataSource } from "../../dataSource";
import { City } from "../../entities/city/city.entity";
import { toLowerCaseAndRemoveSpecialChars } from "../../utils/toLowerCaseAndRemoveSpecialChars";
import { registerCityService } from "./registerCity.service";

export const listOneCityService = async (cityName: string) => {
  const cityNameNormalized = toLowerCaseAndRemoveSpecialChars(
    cityName.replace(/-/g, " ")
  );

  const cityRepository = AppDataSource.getRepository(City);

  const cities = await cityRepository.find({});

  const foundCity = cities.find(
    (city) => cityNameNormalized === toLowerCaseAndRemoveSpecialChars(city.name)
  );

  if (foundCity) {
    return foundCity;
  }

  const registeredCity = await registerCityService(cityNameNormalized);

  return registeredCity;
};
