import { useMutation, useQuery } from "@tanstack/react-query";
import { updatePhoto, getDetailUser } from "@/services/profile.service";
import { UpdatePhotoPayload } from "@/types/payload";

export const useProfile = () => {
  const updatePhotoMutation = useMutation({
    mutationFn: async ({ mu_uuid, mu_avatar_url }: UpdatePhotoPayload) => {
      return await updatePhoto({
        uuid: mu_uuid,
        fileUri: mu_avatar_url,
      });
    },
  });

  const getUserById = ({ id }: { id: number }) => {
    return useQuery({
      queryKey: ["user", id],
      queryFn: () => getDetailUser(id.toString()),
      enabled: !!id,
    });
  };

  return {
    updatePhotoMutation,
    getUserById,
  };
};
