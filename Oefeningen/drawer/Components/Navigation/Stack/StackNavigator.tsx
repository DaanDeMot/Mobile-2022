import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../../../Screens/Home/HomeScreen";
import { SettingsScreen } from "../../../Screens/Settings/SettingsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../../../Screens/Profile/ProfileScreen";

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
  );
};
