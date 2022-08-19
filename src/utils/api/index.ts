import axios, { AxiosResponse } from "axios";

function createInstance() {
  let headers = {};
  return axios.create({
    headers,
    timeout: 5000,
    baseURL: "https://opentdb.com/",
  });
}
const instance = createInstance();

/**
 * @param {String} url
 * @param config
 */

async function $_get<T>(url: string, config?: object) {
  const { data }: AxiosResponse<T> = await instance.get(url, config);
  return data;
}

export { $_get };
