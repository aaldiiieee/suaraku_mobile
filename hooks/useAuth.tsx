import { useMutation } from "@tanstack/react-query";
import { LoginPayload, PinPayload } from "@/types/payload";
import { login, authPin } from "@/services/auth.service";

export const useAuth = () => {
  const loginMutation = useMutation({
    mutationFn: async ({ mu_nik, mu_password }: LoginPayload) => {
      const result = await login({ mu_nik, mu_password });

      if (result?.error) {
        throw new Error(result.error);
      }

      return result;
    },
  });

  const authPinMutation = useMutation({
    mutationFn: async ({ mu_nik, mu_pin }: PinPayload) => {
      const result = await authPin({ mu_nik, mu_pin });

      if (result?.error) {
        throw new Error(result.error);
      }

      return result;
    },
  });

  return {
    loginMutation,
    authPinMutation,
  };
};
