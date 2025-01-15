import { Alert, Text } from "react-native";
import AuthTemplate from "@/components/templates/AuthTemplate";
import { PinInput } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";
import { PinPayload } from "@/types/payload";
import { useSession } from "@/context/SessionContext";
import { useRouter } from "expo-router";
import { useState } from "react";

const VerifyPinScreen = () => {
  const [resetPin, setResetPin] = useState<boolean>(false);
  const { authPinMutation } = useAuth();
  const { session } = useSession();
  const router = useRouter();

  const handlePinComplete = (payload: PinPayload) => {
    const data = {...payload, mu_nik: session?.user?.mu_nik as string};

    authPinMutation.mutate(data, {
      onSuccess: () => {
        Alert.alert("PIN Verified", "PIN verification successful!");
        router.replace("/(dashboard)/dashboard");
      },
      onError: (error) => {
        Alert.alert("PIN Verification Failed", "Please try again.");
        setResetPin(true);
        setTimeout(() => setResetPin(false), 0);
      },
    });
  };

  return (
    <AuthTemplate>
      <Text style={{ fontWeight: "500", marginBottom: 10 }}>Masukan PIN</Text>
      <PinInput onPinComplete={handlePinComplete} reset={resetPin} />
    </AuthTemplate>
  );
};

export default VerifyPinScreen;
