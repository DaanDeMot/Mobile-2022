import React from "react";
import Constants from "expo-constants";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { rainbow } from "rainbow-colors-array-ts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, RouteProp, useNavigation, useRoute } from "@react-navigation/native";

interface DetailProps {
  color?: string;
}

const DetailScreen = () => {
  const navigation: any = useNavigation();
  const route: RouteProp<any> = useRoute();
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:route.params?.color}}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text> {route.params?.color}</Text>
            </TouchableOpacity>
    </View>
  );
};

export function Labo_5_Landing() {
  const colors = rainbow(200, "hex", true);
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, alignItems: "stretch" }}>
          {colors.map((color) => (
            <TouchableOpacity onPress={() => navigation.push("Detail", {color : color.hex})}>
              <View
                key={color.hex}
                style={{
                  height: 50,
                  backgroundColor: color.hex,
                  marginBottom: "1%",
                }}
              ></View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export function Labo_5_Page() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Labo_5_Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: Constants.statusBarHeight },
});
