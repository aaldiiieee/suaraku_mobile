import React, { useEffect, useRef } from "react";
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
import Button from "../button/Button";
import { useSession } from "@/context/SessionContext";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { signOut } = useSession();

  const translateX = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOpen ? 0 : -300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: "home-outline", route: "/dashboard" },
    { name: "User", icon: "person-outline", route: "/user" },
    { name: "Pengaturan & Privasi", icon: "settings-outline", route: "/settings-and-privacy" },
  ];

  return (
    <Animated.View
      style={[
        styles.sidebar,
        {
          transform: [{ translateX }],
        },
      ]}
    >
      <SafeAreaView style={styles.sidebarContent}>
        <View style={styles.sidebarHeader}>
          <Text style={styles.sidebarTitle}>Menu</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color="#345FCB" />
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

        <View style={{ position: "absolute", bottom: 50, left: 20 }}>
          <Button background="danger" style={{ width: 242 }} onPress={signOut} shadow shadowColor="#DF3434">
            Keluar Akun
          </Button>
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
