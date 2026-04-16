import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";

const AuthFooter = ({ navigation, mainTitle, subTitle, title, page }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.connect}>
        {mainTitle}
        <Text style={styles.signUpText} onPress={navigation}>
          {title}
        </Text>
      </Text>
      <Text style={[styles.connect, { marginTop: 10 }]}>{subTitle}</Text>
    </View>
  );
};

export default AuthFooter;

const styles = StyleSheet.create({
  footer: { marginTop: 70 },
  signUpText: { color: Colors.primary, fontSize: Fonts.xl },
  connect: { color: Colors.textMuted, fontSize: Fonts.xl, textAlign: "center" },
});
