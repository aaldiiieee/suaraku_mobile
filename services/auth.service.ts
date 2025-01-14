import callSuarakuApi from "@/helper/api";
import { LoginPayload } from "@/types/payload";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Do manage authentication to the system.
 *
 * @param {LoginPayload} payload - object containing nomor induk kependudukan (NIK) and password.
 * @returns {Promise<AuthResponse>} - object containing access token and user data.
 */

export const login = async (payload: LoginPayload) => {
  const response = await callSuarakuApi.post("/auth/login", payload);
  return response.data;
};

export const logout = async () => {};

export const register = async () => {};

/**
 * Manage the authentication token to async storage.
 *
 * @param {string} token - The authentication token to be saved.
 * @returns {Promise<void>} - A promise that resolves when the token is successfully saved.
 * @throws {Error} - If saving the token fails.
 */

export const saveToken = async (token: string): Promise<void> => {
  try {

    await AsyncStorage.setItem("authToken", token);
    console.log("Token saved:", token);
  } catch (error) {
    console.error("Failed to save token:", error);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem("authToken");
  } catch (error) {
    console.error("Failed to get token:", error);
    return null;
  }
};

export const removeToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem("authToken");
  } catch (error) {
    console.error("Failed to remove token:", error);
  }
};
