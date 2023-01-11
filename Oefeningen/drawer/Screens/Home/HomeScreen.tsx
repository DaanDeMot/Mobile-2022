import { View, Text, StyleSheet, Button } from 'react-native';

import { NavigationContainer, useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
    
  const navigation : any = useNavigation();
    return (
        <View>
            <Text>Home</Text>
            <Button title="Go to Profile screen" onPress={() => { navigation.navigate('Profile')}}/>
        </View>
    );
}

