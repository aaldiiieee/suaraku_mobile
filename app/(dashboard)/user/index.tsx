import { View } from "react-native";
import { UserCard, DetailUserCard } from "@/components/ui";
import { useSession } from "@/context/SessionContext";

const UserScreen = () => {
  const { session } = useSession();

  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
      <UserCard
        name={session?.user?.mu_fullname as string}
        phoneNumber={session?.user?.mu_phoneNumber as string}
        nik={session?.user?.mu_nik as string}
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
    </View>
  );
};

export default UserScreen;
