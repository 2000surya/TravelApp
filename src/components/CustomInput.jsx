import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
const CustomInput = ({
  value,
  setValue,
  placeholder,
  secure,
  keyboardType = "default",
  autoCapitalize = "none",
  visiblity,
  visible,
  error,
}) => {
  return (
    <View>
      <View style={[styles.inputContainer, { marginBottom: error ? 0 : 15 }]}>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          secureTextEntry={visible}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={styles.input}
          placeholderTextColor={Colors.textMuted}
        />
        {secure ? (
          <Pressable
            style={({ pressed }) => [pressed && { opacity: 0.6 }]}
            onPress={visiblity}
          >
            <AntDesign
              name={visible ? "eye" : "eye-invisible"}
              size={24}
              color="black"
            />
          </Pressable>
        ) : null}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: Fonts.lg,
    color: "#000",
    flex: 1,
  },
  errorText: {
    color: "red",
    fontSize: Fonts.md,
    marginBottom: 10,
    marginTop: 4,
    marginLeft: 4,
  },
});
