import axios from "axios";

const ibgeApi = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1",
  timeout: 10000,
});

export const getRioDeJaneiroCities = async () => {
  try {
    const citiesList = await ibgeApi.get("/localidades/estados/33/municipios");

    return citiesList;
  } catch (err) {
    console.log(err);
  }
};
