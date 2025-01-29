import { View } from "react-native";
import { UserCard } from "@/components/ui";
import { useSession } from "@/context/SessionContext";
import { useProfile } from "@/hooks/useProfile";

const DashboardScreen = () => {
  const { session } = useSession();
  const { getUserById } = useProfile();

  const { data: user } = getUserById({
    id: Number(session?.user?.mu_id),
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <UserCard
        name={user?.mu_fullname as string}
        phoneNumber={user?.mu_phoneNumber as string}
        nik={user?.mu_nik as string}
        avatar={user?.mu_avatar_url as string}
      />
    </View>
  );
};

export default DashboardScreen;
