import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@/components/ui";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/landing-background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "#345FCB"]}
        style={styles.gradient}
      />

      <View style={styles.container}>
        <Text style={styles.title}>SuarakuNFC</Text>

        <View style={styles.buttonContainer}>
          <Button background="secondary" style={{ width: 150 }} onPress={() => console.log("NFC Pressed")}>
            NFC
          </Button>
          <Button background="transparent" style={{ width: 150 }} onPress={() => router.push("/login")}>
            Masuk
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "relative",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    position: "absolute",
    bottom: 50,
  },
});
