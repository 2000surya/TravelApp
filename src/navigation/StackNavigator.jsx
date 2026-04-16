import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import auth from "../config/google";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignInScreen from "../screens/SignInScreen";
import SignupScreen from "../screens/SignUpScreen";
import SplashScreen from "../screens/SplashScreen";
import BottomTab from "./BottomTab";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  if (loading) {
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator
      screenOptions={{ animation: "ios_from_right" }}
      initialRouteName={user ? "Home" : "OnboardingScreen"}
    >
      <Stack.Screen
        component={OnboardingScreen}
        name="OnboardingScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SignInScreen}
        name="SignInScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SignupScreen}
        name="SignupScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BottomTab}
        name="Home"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
