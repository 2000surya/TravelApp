import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import OnboardingScreen from "../screens/OnboardingScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={OnboardingScreen}
        name="OnboardingScreen"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
