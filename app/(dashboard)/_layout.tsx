import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Sidebar } from "@/components/ui";

export default function TabLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={toggleSidebar}
              style={{ marginLeft: 16 }}
            >
              <Ionicons name="menu" size={24} color="#345FCB" />
            </TouchableOpacity>
          ),
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
            },
          }),
        }}
      >
        <Tabs.Screen
          name="dashboard/index"
          options={{
            title: "",
            headerTitle: "Dashboard",
            tabBarIcon: ({ color }: { color: string }) => (
              <Ionicons name="home-outline" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="user/index"
          options={{
            title: "",
            headerTitle: "User",
            tabBarIcon: ({ color }: { color: string }) => (
              <Ionicons name="person-outline" size={30} color={color} />
            ),
          }}
        />
      </Tabs>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {isSidebarOpen && (
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
          onPress={() => setIsSidebarOpen(false)}
        />
      )}
    </View>
  );
}
