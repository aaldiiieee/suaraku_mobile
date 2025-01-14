import { Input, Button } from "@/components/ui";
import AuthTemplate from "@/components/templates/AuthTemplate";

const LoginScreen = () => {
  return (
    <AuthTemplate>
      <Input
        placeholder="Nomor Induk Kependudukan (NIK)"
        keyboardType="number-pad"
      />
      <Input placeholder="Nomor Handphone" keyboardType="number-pad" />
      <Input placeholder="Password" keyboardType="default" secureTextEntry />
      <Button
        background="primary"
        onPress={() => console.log("Login Pressed")}
        style={{ width: 348 }}
      >
        Masuk
      </Button>
    </AuthTemplate>
  );
};

export default LoginScreen;
