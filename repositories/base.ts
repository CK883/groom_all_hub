import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {
  ILoginErrorResponse,
  ILoginResponse,
} from "~/interface/login.interface";
const router = useRouter();
const runtimeConfig = useRuntimeConfig();

(axios.defaults.baseURL = runtimeConfig.public.app_api_endpoint),
  (axios.defaults.headers.common.ContentType = "application/json");

const instance = axios.create({
  baseURL: runtimeConfig.public.app_api_endpoint,
});

function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  axios
    .post(`/auth/refresh`, { refreshToken: refreshToken })
    .then((resp: any) => {
      const rawData = resp.data.data;
      localStorage.setItem("accessToken", rawData.accessToken.token);
      localStorage.setItem("refreshToken", rawData.refreshToken.token);
    })
    .catch((err: ILoginErrorResponse) => {
      window.location.href = "/login";
      throw err;
    });
}

instance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("accessToken");
    if (config.url !== "/auth/login") {

      if (!_isNil(token)) {
        const decodeToken = jwtDecode(token, { complete: true });
        const tokenExpire = decodeToken.exp * 1000;
        const now = new Date().getTime();
        if (tokenExpire > now) {
          if (localStorage.getItem("accessToken") && config.headers) {
            config.headers.Authorization = `Bearer ${localStorage.getItem(
              "accessToken"
            )}`;
          }
        } else {
          refreshToken();
        }
      } else {
        window.location.href = "/login";
      }
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
export default instance;
