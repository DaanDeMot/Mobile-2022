import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingsScreen } from "./Screens/Settings/SettingsScreen";
import { HomeScreen } from "./Screens/Home/HomeScreen";
import { DrawerNav } from "./Components/Navigation/Drawer/drawerNavigation";


const App = () => {
  return (
    <DrawerNav></DrawerNav>
  );
}

export default App;