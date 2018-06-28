import axios from "axios";
import qs from "qs";

export function getCountries() {
  return axios
    .create({
      baseURL: "http://country.io",
      paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      }
    })
    .get("/names.json").then(res=>res.data);
}
