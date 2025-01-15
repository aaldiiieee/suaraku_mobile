import { View } from "react-native";
import { UserCard } from "@/components/ui";
import { useSession } from "@/context/SessionContext"

const DashboardScreen = () => {
  const { session } = useSession();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <UserCard
        name={session?.user?.mu_fullname as string}
        phoneNumber={session?.user?.mu_phoneNumber as string}
        nik={session?.user?.mu_nik as string}
      />
    </View>
  );
};

export default DashboardScreen;
