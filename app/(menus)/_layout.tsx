import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function MenusLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="settings-and-privacy/index"
        options={{
          title: "Pengaturan dan Privasi",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
