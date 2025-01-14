import { Input, Button } from "@/components/ui";
import AuthTemplate from "@/components/templates/AuthTemplate";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useSession } from "@/context/SessionContext";

const LoginScreen = () => {
  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useSession();

  const router = useRouter();

  const handleLogin = () => {
    const loginPayload = { mu_nik: nik, mu_password: password };
    signIn(loginPayload);
    router.push("/(dashboard)/dashboard");
  };

  return (
    <AuthTemplate>
      <Input
        placeholder="Nomor Induk Kependudukan (NIK)"
        keyboardType="number-pad"
        value={nik}
        onChangeText={setNik}
      />
      <Input
        placeholder="Password"
        keyboardType="default"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button background="primary" onPress={handleLogin} style={{ width: 348 }}>
        Masuk
      </Button>
    </AuthTemplate>
  );
};

export default LoginScreen;
