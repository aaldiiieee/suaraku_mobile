import { MenuItem } from "@/types/ui";
import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

const SettingsAndPrivacyScreen = () => {
  const menuItems: MenuItem[] = [
    { name: "Notifikasi", icon: "notifications-outline", route: "/dashboard" },
    { name: "Ubah Password", icon: "lock-closed-outline", route: "/user" },
    {
      name: "Buat Pin Keamanan",
      icon: "shield-half-outline",
      route: "/settings-and-privacy",
    },
  ];

  return (
    <SafeAreaView style={styles.menuContent}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Ionicons name={item.icon} size={24} color="#333" />
            <Text style={styles.menuItemText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuContent: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
  },
});

export default SettingsAndPrivacyScreen;
