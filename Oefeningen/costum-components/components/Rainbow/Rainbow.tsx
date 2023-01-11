import * as React from "react";
import {View, StyleSheet, Text, ViewStyle, StyleProp, FlatList} from "react-native";
import Constants from 'expo-constants';
import Box from "../Box/Box";
import { rainbow } from "rainbow-colors-array-ts";

const colors = rainbow(7, "hex", true);
console.log(colors);


interface RainbowProps {
  viewStyleProps?: StyleProp<ViewStyle>,
  boxWidth?:any
  boxHeight?:any,

}

export default function Rainbow({viewStyleProps, boxWidth, boxHeight}:RainbowProps) {

    return (
        <View style={viewStyleProps}>          
          <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[0].hex}}></Box>
          <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[1].hex}}></Box>
          <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[2].hex}}></Box>
          <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[3].hex}}></Box>
          <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[4].hex}}></Box>
          <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[5].hex}}></Box>      
        </View>
      );
    }
