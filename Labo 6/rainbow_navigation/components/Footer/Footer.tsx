import * as React from "react";
import {rainbow } from "rainbow-colors-array-ts";
import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import { Letter } from "../Letter/Letter";



interface IFooter {
    styleProps?: StyleProp<ViewStyle>,
    text: string,
    pastelColor?: string
  }
  
  export const Footer = ({styleProps, text, pastelColor} : IFooter) => {
    let colors: any;

    if(pastelColor=="true"){
       colors = rainbow(10, "hex", true);
    }else{
       colors = rainbow(10, "hex", false);
    }

    const ShowSixLetters = () =>{
        let letterGroup : JSX.Element[] = [];
        for (let i=0; i <=9; i++){
            letterGroup.push(<Letter key={text.indexOf()} letter={text.charAt(i)} fontColor={colors[i].hex}></Letter>);
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