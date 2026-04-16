import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";
import useLocation from "../hooks/useLocation";

const Home = () => {
  const { location, address, errorMsg, loading } = useLocation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.container}>
        <Text>
          {loading
            ? "Fetching location..."
            : address
              ? `${address.city}, ${address.region}, ${address.country}`
              : errorMsg}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.card,
    justifyContent: "center",
    alignItems: "center",
  },
});
