import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
const BottomIcons = ({ name, family, size, color, focus }) => {
  let IconComponent = family;
  switch (family) {
    case "Feather":
      IconComponent = Feather;
      break;
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "FontAwesome5":
      IconComponent = FontAwesome5;
      break;
    default:
      IconComponent = FontAwesome5;
  }

  return <IconComponent name={name} size={size} color={color} />;
};

export default BottomIcons;
