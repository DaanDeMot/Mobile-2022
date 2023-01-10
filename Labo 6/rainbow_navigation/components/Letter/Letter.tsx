import * as React from "react";
import {View,Text, StyleSheet, StyleProp, ViewStyle, TextStyle} from "react-native";


interface ILetter {
    letter:string,
    fontColor?:string
  }
  
  export const Letter = ({letter, fontColor}: ILetter) => {
    return(
      <>
      <Text style={{ fontSize: 30, color: fontColor }}>
         {letter}
      </Text>
      </>
    )
  }