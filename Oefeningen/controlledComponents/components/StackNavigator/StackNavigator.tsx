import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Home/Home";
import DetailScreen from "../Detail/Detail";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title: "lmao"} }>
            {props => <HomeScreen username="oke" title={"Welcome at home"} />}
        </Stack.Screen>
        <Stack.Screen name="Detail" component={DetailScreen} options={{title: "Detail"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;