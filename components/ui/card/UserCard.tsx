import { Text, View, StyleSheet, Image } from "react-native";
import { UserCardTypeProps } from "@/types/ui";

const UserCard = ({ name, phoneNumber, nik }: UserCardTypeProps) => {
  return (
    <View style={styles.cardBody}>
      <Image
        source={require("@/assets/images/user-blank.png")}
        style={{ width: 45, height: 45, borderRadius: 100 }}
      />
      <View style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{name}</Text>
        <Text>{phoneNumber}</Text>
        <Text>{nik}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    paddingHorizontal: 27,
    paddingVertical: 11,
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 365,
    elevation: 5,
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    gap: 20,
  },
});

export default UserCard;
