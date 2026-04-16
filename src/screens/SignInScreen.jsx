import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"; // Cleaned up double import
import { Alert, StatusBar, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

// Custom Components & Config
import AuthFooter from "../components/AuthFooter";
import AuthHeader from "../components/AuthHeader";
import CustomeButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import GoogleButton from "../components/GoogleButton";
import auth from "../config/google";
import { Colors } from "../constants/Colors";

// 1. Google Configuration
// GoogleSignin.configure({
//   webClientId:
//     "193913448816-7ldjsidkjvpm32qnk9nurgq4dveb2nhl.apps.googleusercontent.com",
//   offlineAccess: true,
// });

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const visiblity = () => setVisible(!visible);

  const emailHandler = (text) => {
    setEmail(text);
    if (!text.includes("@")) {
      setEmailError("Please enter valid email");
    } else setEmailError("");
  };

  const passwordHandler = (text) => {
    setPassword(text);
    if (text.length < 8) {
      setPasswordError("Password must be 8 character");
    } else setPasswordError("");
  };

  // 2. Email/Password Login Handler
  const signHandler = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill email and password");
      return;
    }
    if (emailError || passwordError) {
      Alert.alert("Error", "Please fix the errors before signing in");
      return;
    }

    try {
      setDisabled(true);
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("Login Success:", userCredential.user.uid);

      // Move navigation here so it only happens if login works
      navigation.replace("Home");
    } catch (error) {
      console.error("Login Error:", error.message);
      Alert.alert("Login Failed", error.message);
      setDisabled(false);
    } finally {
      setLoading(false);
    }
  };

  // 3. Google Login Handler
  const googleLoginHandler = async () => {
    // try {
    //   setLoading(true);
    //   await GoogleSignin.hasPlayServices();
    //   const { idToken } = await GoogleSignin.signIn();
    //   const googleCredential = GoogleAuthProvider.credential(idToken);
    //   await signInWithCredential(auth, googleCredential);
    //   navigation.replace("Home");
    // } catch (error) {
    //   console.log("Google Sign-In Error:", error);
    //   Alert.alert("Google Error", "Login cancelled or failed.");
    // } finally {
    //   setLoading(false);
    // }
  };

  const authHandler = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.content}>
          <AuthHeader
            title={"Sign in now"}
            subTitle={"Please sign in to continue our app"}
          />

          <View style={styles.inputContainer}>
            <CustomInput
              value={email}
              setValue={emailHandler}
              placeholder="Email"
              error={emailError}
            />
            <CustomInput
              value={password}
              setValue={passwordHandler}
              placeholder="Password"
              secure={true}
              visiblity={visiblity}
              visible={visible}
              error={passwordError}
            />
          </View>

          <View style={{ width: "100%" }}>
            <CustomeButton
              text={loading ? "Loading..." : "Sign in"}
              onPress={signHandler}
              disabled={disabled}
            />
          </View>

          <AuthFooter
            mainTitle={" Don't have an account?  "}
            subTitle={"Or Connect"}
            navigation={authHandler}
            title={"SignUp"}
          />
          <View style={{ alignItems: "center" }}>
            <GoogleButton googleLoginHandler={googleLoginHandler} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { paddingHorizontal: 20 },

  inputContainer: { marginBottom: 20, width: "100%", marginTop: 25 },
});
