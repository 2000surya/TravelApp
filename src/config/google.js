// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCF-yGZ6KAgbCBAZOxeLLH1cAYqtubxc48",
  authDomain: "travelapp-91698.firebaseapp.com",
  projectId: "travelapp-91698",
  storageBucket: "travelapp-91698.firebasestorage.app",
  messagingSenderId: "193913448816",
  appId: "1:193913448816:web:72f86a126fc6e8e08287b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export default auth;
