import { View, Text, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
export const SettingsScreen = () => {
    const navigation : any = useNavigation();
    return (
        <View>
            <Text>Settings</Text>
            <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer"/>
        </View>
    );
}