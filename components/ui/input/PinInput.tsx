import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { PinPayload } from "@/types/payload";

const PinInput = ({
  onPinComplete,
  reset,
}: {
  onPinComplete: (pinPayload: PinPayload) => void;
  reset?: boolean;
}) => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    } else if (newPin.every((digit) => digit !== "")) {
      const pinPayload: PinPayload = {
        mu_nik: "",
        mu_pin: newPin.join(""),
      };
      onPinComplete(pinPayload);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && pin[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (reset) {
      setPin(["", "", "", ""]);
      inputRefs.current[0]?.focus();
    }
  }, [reset]);

  return (
    <View style={styles.container}>
      {pin.map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref!)}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={pin[index]}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          secureTextEntry
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 50,
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
  },
});

export default PinInput;
