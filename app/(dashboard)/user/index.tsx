import { View } from "react-native";
import { UserCard, DetailUserCard, Button } from "@/components/ui";
import { useSession } from "@/context/SessionContext";
import { useProfile } from "@/hooks/useProfile";

const UserScreen = () => {
  const { session } = useSession();

  const { updatePhotoMutation, getUserById } = useProfile();
  const { data: user } = getUserById({
    id: Number(session?.user?.mu_id),
  });

  const handleAvatarChange = async (fileUri: string) => {
    try {
      const uuid = session?.user?.mu_uuid;

      await updatePhotoMutation.mutateAsync({
        mu_uuid: uuid as string,
        mu_avatar_url: fileUri,
      });
    } catch (error) {
      console.error("Failed to update avatar:", error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
      <UserCard
        name={user?.mu_fullname as string}
        phoneNumber={user?.mu_phoneNumber as string}
        nik={user?.mu_nik as string}
        avatar={user?.mu_avatar_url as string}
        onAvatarChange={handleAvatarChange}
      />

      <DetailUserCard
        user={{
          nik: session?.user?.mu_nik as string,
          name: session?.user?.mu_fullname as string,
          phoneNumber: session?.user?.mu_phoneNumber as string,
          bloodType: session?.user?.mu_blood_type as string,
          address: session?.user?.mu_address as string,
          province: session?.user?.mu_province as string,
          city: session?.user?.mu_city as string,
          district: session?.user?.mu_district as string,
        }}
      />

      <Button
        background="primary"
        onPress={() => console.log("test")}
        style={{ marginTop: 20, width: 365 }}
        shadow
        shadowColor="#345FCB"
      >
        Tampilkan Dalam QR Code
      </Button>
    </View>
  );
};

export default UserScreen;
