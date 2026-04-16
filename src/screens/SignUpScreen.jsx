import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Alert, StatusBar, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthFooter from "../components/AuthFooter";
import AuthHeader from "../components/AuthHeader";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import GoogleButton from "../components/GoogleButton";
import auth from "../config/google";
import { Colors } from "../constants/Colors";
const SignUpScreen = ({ navigation }) => {
  const [forms, setForms] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const [userNameError, setuserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const visiblity = () => setVisible(!visible);

  const inputValueHanlder = (key, value) => {
    setForms((pre) => ({ ...pre, [key]: value }));

    if (key === "userName") {
      if (!value.trim()) {
        setuserNameError("UserName is required");
      } else {
        setuserNameError("");
      }
    }
    if (key === "email") {
      if (!value.includes("@")) {
        setEmailError("Please enter valid email");
      } else setEmailError("");
    }

    if (key === "password") {
      if (value.length < 8) {
        setPasswordError("Password must have 8 characters");
      } else setPasswordError("");
    }
  };

  const signUpHandler = async () => {
    if (!forms.email || !forms.password || !forms.userName) {
      Alert.alert("Error", "Please enter the all fields");
      return;
    }
    if (userNameError || emailError || passwordError) {
      Alert.alert("Error", "Please fix validation errors");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        forms.email,
        forms.password,
      );
      await updateProfile(userCredential.user, {
        displayName: forms.userName,
      });
      console.log("success");

      navigation.replace("Home");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setEmailError("Email already exists");
      } else if (error.code === "auth/invalid-email") {
        setEmailError("Invalid email");
      } else if (error.code === "auth/weak-password") {
        setPasswordError("Weak password");
      } else {
        Alert.alert("Error", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const navigationHandler = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          <AuthHeader
            title={"SignUp Now"}
            subTitle={"Please fill the details and create account"}
          />

          {/* Input section */}
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder={"User Name"}
              value={forms.userName}
              setValue={(text) => inputValueHanlder("userName", text)}
              error={userNameError}
            />
            <CustomInput
              placeholder={"Enter email..."}
              value={forms.email}
              setValue={(text) => inputValueHanlder("email", text)}
              error={emailError}
            />

            <CustomInput
              placeholder={"Enter your password"}
              value={forms.password}
              visible={visible}
              visiblity={visiblity}
              secure={true}
              setValue={(text) => inputValueHanlder("password", text)}
              error={passwordError}
            />
          </View>

          <View>
            <CustomButton
              text={loading ? "Loading" : "SignUp"}
              onPress={signUpHandler}
            />
          </View>

          <View>
            <AuthFooter
              navigation={navigationHandler}
              mainTitle={"Already have an account "}
              title={"SignIn"}
              subTitle={"Or connect"}
            />
            <View style={{ alignItems: "center" }}>
              <GoogleButton />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.card,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginTop: 40,
  },
});
