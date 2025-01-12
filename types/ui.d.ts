import { ViewStyle } from "react-native";

export interface ButtonTypeProps {
  children: React.ReactNode;
  background?: "primary" | "secondary" | "transparent" | "disabled";
  style?: ViewStyle;
  onPress: () => void;
}
