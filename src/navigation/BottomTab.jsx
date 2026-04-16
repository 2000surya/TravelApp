import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomIcons from "../components/BottomIcons";
import Home from "../screens/Home";
import Journaldetails from "../screens/Journaldetails";
import Profile from "../screens/Profile";

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="BottomHome"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <BottomIcons
              name={"home"}
              color={color}
              size={size}
              focus={focused}
              family={"Feather"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Journal"
        component={Journaldetails}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <BottomIcons
              name={"book-open"}
              color={color}
              size={size}
              focus={focused}
              family={"Feather"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Journaldetails}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <BottomIcons
              name={"search"}
              color={color}
              size={size}
              focus={focused}
              family={"Feather"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <BottomIcons
              name={"user"}
              color={color}
              size={size}
              focus={focused}
              family={"Feather"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
