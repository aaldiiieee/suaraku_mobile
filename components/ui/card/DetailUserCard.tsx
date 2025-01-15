import { Text, View, StyleSheet } from "react-native";
import { UserDetailCardProps } from "@/types/ui";

const fieldLabels: Record<string, string> = {
  nik: "NIK",
  name: "Nama",
  phoneNumber: "Nomor Telepon",
  bloodType: "Golongan Darah",
  address: "Alamat",
  province: "Provinsi",
  city: "Kota",
  district: "Kecamatan",
};

const DetailUserCard = ({ user }: UserDetailCardProps) => {
  return (
    <View style={styles.container}>
      {Object.entries(user)?.map(([key, value]) => (
        <View key={key} style={styles.field}>
          <Text style={styles.label}>{fieldLabels[key] || key}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 334,
    elevation: 5,
    padding: 20,
  },
  field: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2,
    color: "#333",
  },
  value: {
    fontSize: 14,
    color: "#555",
  },
});

export default DetailUserCard;
