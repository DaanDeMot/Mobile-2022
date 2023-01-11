import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../../../Screens/Home/HomeScreen";
import { SettingsScreen } from "../../../Screens/Settings/SettingsScreen";
import { StackNav } from "../Stack/StackNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="landing" component={StackNav} options={{ title: 'My  Home' }}/>
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
