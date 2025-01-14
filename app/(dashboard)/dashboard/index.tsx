import { Text, View, TouchableOpacity } from "react-native";
import { useSession } from "@/context/SessionContext";

const DashboardScreen = () => {
    const { signOut, session } = useSession()
    console.log(session?.user, "<-- session");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={signOut}>
        <Text>{session?.user?.mu_fullname || "Loading..."}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
