import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { UserCardTypeProps } from "@/types/ui";
import { Ionicons } from "@expo/vector-icons";

const UserCard = ({
  name,
  phoneNumber,
  nik,
  avatar,
  onAvatarChange,
}: UserCardTypeProps) => {
  const handleEditPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      if (onAvatarChange) onAvatarChange(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.cardBody}>
      <View style={{ position: "relative" }}>
        <Image
          source={
            avatar ? { uri: avatar } : require("@/assets/images/user-blank.png")
          }
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
        {onAvatarChange && (
          <TouchableOpacity style={{ position: "absolute", bottom: 5, right: 0 }} onPress={handleEditPhoto}>
            <Ionicons name="camera-outline" size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>
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
    gap: 20,
  },
});

export default UserCard;
