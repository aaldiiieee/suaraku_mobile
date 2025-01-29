import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { ButtonTypeProps } from "@/types/ui";

const Button = ({
  children,
  background,
  style,
  shadow,
  shadowColor,
  onPress,
}: ButtonTypeProps) => {
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
      case "danger":
        return styles.buttonDanger;
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
    <TouchableOpacity
      style={[
        getButtonStyle(), style, styles.button, 
        shadow && { boxShadow: `0px 4px 10px 0px ${shadowColor}` }
      ]}
      onPress={onPress}
    >
      <Text style={[getTextStyle(), styles.buttonText]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonPrimary: {
    backgroundColor: "#345FCB",
  },
  buttonSecondary: {
    backgroundColor: "#ffffff",
  },
  buttonTransparent: {
    backgroundColor: "transparent",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonDanger: {
    backgroundColor: "#FF0000",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textPrimary: {
    color: "#ffffff",
  },
  textSecondary: {
    color: "#345FCB",
  },
  textDisabled: {
    color: "#A9A9A9",
  },
  textTransparent: {
    color: "#ffffff",
  },
});

export default Button;
