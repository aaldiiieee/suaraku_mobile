import { ViewStyle, KeyboardType, KeyboardTypeIOS } from "react-native";

export interface ButtonTypeProps {
  children: React.ReactNode;
  background?: "primary" | "secondary" | "transparent" | "disabled";
  style?: ViewStyle;
  onPress: () => void;
}

export interface InputTypeProps {
  placeholder?: string;
  label?: string;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}
