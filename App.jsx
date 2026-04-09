import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./src/navigation/StackNavigator";
const App = () => {
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
