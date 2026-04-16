import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TravelApp</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: Fonts.xl,
    color: Colors.background,
    fontWeight: "bold",
  },
});
