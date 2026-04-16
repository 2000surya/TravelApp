import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";

const CustomButton = ({ text, onPress, disabled }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && { opacity: 0.7 },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  textStyle: {
    color: Colors.background,
    fontSize: Fonts.lg,
  },
});
