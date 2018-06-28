import axios from "axios";
import qs from "qs";

export function getCountries() {
  return axios
    .create({
      //cors관련 이슈가 있어 아래 url로 바꿔주었습니다.
      baseURL: "https://cors-anywhere.herokuapp.com/country.io",
      paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      }
    })
    .get("/names.json")
    .then(res => res.data);
}
