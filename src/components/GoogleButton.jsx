import { Image, Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { Images } from "../constants/Images";
const GoogleButton = ({ googleLoginHandler }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.googleButton,
        pressed && { opacity: 0.6 },
      ]}
      onPress={googleLoginHandler}
    >
      <Image source={Images.google} style={styles.googleIcon} />
    </Pressable>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  googleIcon: { width: 30, height: 30, borderRadius: 15 },

  googleButton: {
    marginTop: 25,
    padding: 8,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.textMuted,
  },
});
