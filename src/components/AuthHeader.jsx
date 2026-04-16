import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";

const AuthHeader = ({ title, subTitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.signText}>{title}</Text>
      <Text style={styles.infoText}>{subTitle}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  header: { marginTop: 90 },
  signText: {
    fontSize: Fonts.xxxl,
    color: Colors.textPrimary,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoText: {
    fontSize: Fonts.lg,
    color: Colors.textPrimary,
    marginTop: 15,
    textAlign: "center",
  },
});
