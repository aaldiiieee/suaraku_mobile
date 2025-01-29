import callSuarakuApi from "@/helper/api";

export const updatePhoto = async ({
  uuid,
  fileUri,
}: {
  uuid: string;
  fileUri: string;
}) => {
  const fileName = fileUri.split("/").pop() || `avatar_${Date.now()}.jpg`;

  const formData = new FormData();
  formData.append("avatar", {
    uri: fileUri,
    name: fileName,
    type: "image/jpeg",
  } as any);

  const response = await callSuarakuApi.post(`/user/${uuid}/avatar`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response, "<---- response");

  return response.data;
};

export const getDetailUser = async (id: string) => {
  const response = await callSuarakuApi.get(`/user/get-user/${id}`);
  return response.data.data;
}