import axios from "axios";

const callSuarakuApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

callSuarakuApi.interceptors.request.use(
  async (config) => {
    const token: string = "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

callSuarakuApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

export default callSuarakuApi;
