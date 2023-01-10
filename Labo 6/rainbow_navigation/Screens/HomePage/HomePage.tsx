import React from 'react'
import { View, Text, Button} from 'react-native'
import { useNavigation } from "@react-navigation/native";

export function HomePage() {

  const navigation : any = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Home!</Text>
          <Button title='Go to Labo 5' onPress={() => navigation.navigate("Labo 5")}></Button>
        </View>
      );
}
