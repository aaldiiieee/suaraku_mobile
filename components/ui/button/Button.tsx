import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { ButtonTypeProps } from "@/types/ui";

const Button = ({ children, background, style, onPress }: ButtonTypeProps) => {
  const getButtonStyle = () => {
    switch (background) {
      case "primary":
        return styles.buttonPrimary;
      case "secondary":
        return styles.buttonSecondary;
      case "transparent":
        return styles.buttonTransparent;
      case "disabled":
        return styles.buttonDisabled;
      default:
        return styles.buttonPrimary;
    }
  };

  const getTextStyle = () => {
    switch (background) {
      case "primary":
        return styles.textPrimary;
      case "secondary":
        return styles.textSecondary;
      case "transparent":
        return styles.textTransparent;
      case "disabled":
        return styles.textDisabled;
      default:
        return styles.textPrimary;
    }
  };

  return (
    <TouchableOpacity style={[getButtonStyle(), style]} onPress={onPress}>
      <Text style={getTextStyle()}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: "#345FCB",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonSecondary: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonTransparent: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textPrimary: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textSecondary: {
    color: "#345FCB",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDisabled: {
    color: "#A9A9A9",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textTransparent: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Button;
