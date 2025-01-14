import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { InputTypeProps } from "@/types/ui";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

const Input = ({
  placeholder,
  label,
  keyboardType,
  secureTextEntry,
}: InputTypeProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{ position: "relative" }}>
      {label && <Text>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        style={styles.inputStyle}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry && !showPassword}
        autoFocus
      />

      {secureTextEntry && (
        <TouchableOpacity
          style={{ position: "absolute", right: 10, top: 10 }}
          onPress={togglePasswordVisibility}
        >
          {showPassword ? (
            <Ionicons name="eye" size={24} color="#E8E8E8" />
          ) : (
            <Ionicons name="eye-off" size={24} color="#E8E8E8" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: 348,
    height: 44,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Input;
