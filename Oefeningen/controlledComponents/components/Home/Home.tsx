import * as React from "react";
import { View, Text } from "react-native";

interface HomeScreenProps{
    title:string,
    username:string,
}

const HomeScreen = ({title, username} : HomeScreenProps) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{title}</Text>
        <Text>Welcome {username}</Text>
      </View>
    );
  }

  export default HomeScreen;