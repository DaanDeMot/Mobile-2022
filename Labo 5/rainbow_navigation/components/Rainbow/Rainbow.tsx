import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { rainbow } from "rainbow-colors-array-ts";



interface BoxProps {
  boxProps?: StyleProp<ViewStyle>;
}

const Box = ({ boxProps }: BoxProps) => {
  return <View style={boxProps}></View>;
};

interface RainbowProps {
  styleProps?: StyleProp<ViewStyle>;
  boxWidth?: any;
  boxHeight?: any;
  pastelColor?: boolean,
  randomize?: boolean,
}

export const Rainbow = ({ styleProps, boxWidth, boxHeight, pastelColor, randomize }: RainbowProps) => {
    const colors = rainbow(10, "hex", pastelColor);

  const Show6Boxes = () => {
    let colorGroup : JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      colorGroup.push( 
      <Box key={colors[i].hex} boxProps={{ 
        width: boxWidth,
        height: boxHeight,
        backgroundColor: colors[i].hex}}></Box>);
    }
    if(randomize){
      return colorGroup = colorGroup.sort(() => Math.random() - 0.5);
    }else{
    return colorGroup;
  }
  };

  return (
    <>
      <View style={styleProps}>
        {Show6Boxes()}
      </View>
    </>
  );
};
