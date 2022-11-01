import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

function createInstance() {
  let headers = {};
  return axios.create({
    headers,
    timeout: 5000,
    baseURL: "https://opentdb.com/",
  });
}
const instance = createInstance();

//instance.defaults.headers.common["Authorization"] = `Bearer token`;
/**
 * @param {String} url
 * @param config
 */

async function $_get<T>(url: string, config?: AxiosRequestConfig) {
  const { data }: AxiosResponse<T> = await instance.get(url, config);
  return data;
}

const changeOriginalHeader = (originalRequestConfig: any, options: {}) => {
  Object.entries(options).forEach(([key, value], index) => {
    originalRequestConfig.headers[key] = value;
  });
  return originalRequestConfig;
};

instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    const originalRequestConfig: AxiosRequestConfig = response.config;
    const config = changeOriginalHeader(originalRequestConfig, {});
    await axios(config);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { $_get };
