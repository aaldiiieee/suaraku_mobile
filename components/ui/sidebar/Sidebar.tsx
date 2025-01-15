import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { SidebarProps, MenuItem } from "@/types/ui";
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
} from "react-native";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: "home-outline", route: "/dashboard" },
    { name: "User", icon: "person-outline", route: "/user" },
  ];

  return (
    <Animated.View
      style={[
        styles.sidebar,
        {
          transform: [
            {
              translateX: isOpen ? 0 : -300,
            },
          ],
        },
      ]}
    >
      <SafeAreaView style={styles.sidebarContent}>
        <View style={styles.sidebarHeader}>
          <Text style={styles.sidebarTitle}>Menu</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              router.push(item.route as any);
              onClose();
            }}
          >
            <Ionicons name={item.icon} size={24} color="#333" />
            <Text style={styles.menuItemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}

        <View style={{ position: "absolute", bottom: 50, left: 50 }}>
          <TouchableOpacity
            onPress={() => console.log("Logout")}
          >
            <Ionicons name="log-out" size={24} color="#fff" />
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: "#fff",
    zIndex: 2,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sidebarContent: {
    flex: 1,
  },
  sidebarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: "bold",
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

export default Sidebar;
