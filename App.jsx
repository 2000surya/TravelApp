import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initDB } from "./src/database/db";
import StackNavigator from "./src/navigation/StackNavigator";
const App = () => {
  useEffect(() => {
    initDB();
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
