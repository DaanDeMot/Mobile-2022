import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface boxProps{
    boxProps?: StyleProp<ViewStyle>
}

export default function Box({boxProps} : boxProps ) {
  return (
    <View style={boxProps}>
    </View>
  );
}
