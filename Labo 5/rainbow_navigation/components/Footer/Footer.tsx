import * as React from "react";
import {rainbow } from "rainbow-colors-array-ts";
import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import { Letter } from "../Letter/Letter";



interface IFooter {
    styleProps?: StyleProp<ViewStyle>,
    text: string,
    pastelColor?: boolean
  }
  
  export const Footer = ({styleProps, text, pastelColor} : IFooter) => {
    const colors = rainbow(10, "hex", pastelColor);

    const ShowSixLetters = () =>{
        let letterGroup : JSX.Element[] = [];
        for (let i=0; i <=9; i++){
            letterGroup.push(<Letter letter={text.charAt(i)} fontColor={colors[i].hex}></Letter>);
        }
        return letterGroup;
    }

    return(
      <>
      <View style={styleProps}>
      {ShowSixLetters()}
      </View>
      </>
    );
  }