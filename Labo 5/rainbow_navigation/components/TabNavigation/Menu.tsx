import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Labo_4_Page } from "../../Screens/Labo_4_Page/Labo_4_Page";
import { Labo_5_Page } from "../../Screens/Labo_5_Page/Labo_5_Page";
import { HomePage } from "../../Screens/HomePage/HomePage";

const Tab = createBottomTabNavigator();

export const NavigationMenu = () => {
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Labo 4" component={Labo_4_Page} />
        <Tab.Screen name="Labo 5" component={Labo_5_Page} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}