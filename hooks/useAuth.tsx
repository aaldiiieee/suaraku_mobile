import { useMutation } from "@tanstack/react-query";
import { LoginPayload } from "@/types/payload";
import { login } from "@/services/auth.service";

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

  return {
    loginMutation,
  };
};
