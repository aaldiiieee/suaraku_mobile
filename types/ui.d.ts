import { ViewStyle, KeyboardType, KeyboardTypeIOS } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface ButtonTypeProps {
  children: React.ReactNode;
  background?: "primary" | "secondary" | "transparent" | "disabled" | "danger";
  shadow?: boolean;
  shadowColor?: string;
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

export interface UserCardTypeProps {
  name: string;
  phoneNumber: string;
  nik: string;
  avatar: string
  image?: string;
  onAvatarChange?: (uri: string) => void
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface MenuItem {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string | undefined;
}

export interface UserDetailCardProps {
  user: {
    nik: string;
    name: string;
    phoneNumber: string;
    bloodType: string;
    address: string;
    province: string;
    city: string;
    district: string;
  };
}

export interface ModalTypeProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}