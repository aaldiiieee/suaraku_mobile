import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { AuthTemplateProps } from "@/types/temp";

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/suaraku-logo.png")}
        style={{ marginBottom: 52 }}
      />

      {children}

      <View style={styles.registerText}>
        <Text>Belum memiliki akun?</Text>
        <Text
          style={{ color: "#345FCB" }}
          onPress={() => console.log("Daftar")}
        >
          Daftar dengan NFC
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "relative",
  },

  registerText: {
    marginTop: 52,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

export default AuthTemplate;
