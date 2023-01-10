import * as React from "react";
import {rainbow } from "rainbow-colors-array-ts";
import {View,Text, StyleSheet, StyleProp, ViewStyle, TextStyle} from "react-native";
import Constants from 'expo-constants';


const colors = rainbow(7, "hex", true);
console.log(colors);





export default function App() {

  return (
    <View style={styles.container}>
      <Rainbow styleProps={{alignItems:'stretch'}}boxHeight={10}></Rainbow>
      <View style={styles.body}>
      <Rainbow styleProps={{ flexDirection: "row", flex:1, justifyContent:"space-around", width:"45%"}} boxWidth={10} boxHeight="100%"></Rainbow>
      <Rainbow styleProps={{width:"45%", justifyContent:"space-around", alignItems:'center'}} boxWidth={50} boxHeight={50}></Rainbow>
      </View>

      <Footer styleProps={{flexDirection: "row", height:100, alignItems:"center", alignSelf:"center"}}></Footer>
    </View>
  );
}

interface BoxProps {
  boxProps?: StyleProp<ViewStyle>
}

 const Box = ({boxProps}: BoxProps) => {
  return (
    <View style={boxProps}></View>
  )
}



interface RainbowProps {
  styleProps?: StyleProp<ViewStyle>,
  boxWidth?:any
  boxHeight?:any,

}

const Rainbow = ({styleProps, boxWidth,boxHeight } : RainbowProps) => {
return(
  <>
  <View style={styleProps}>
    <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[0].hex}}></Box>
    <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[1].hex}}></Box>
    <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[2].hex}}></Box>
    <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[3].hex}}></Box>
    <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[4].hex}}></Box>
    <Box boxProps={{width:boxWidth, height:boxHeight,backgroundColor:colors[5].hex}}></Box>
  </View>
  </>
);

}

interface IFooter {
  styleProps?: StyleProp<ViewStyle>,
}

const Footer = ({styleProps} : IFooter) => {
  return(
    <>
    <View style={styleProps}>
    <Letter letter="R" fontColor={colors[0].hex}></Letter>
    <Letter letter="a" fontColor={colors[1].hex}></Letter>
    <Letter letter="i" fontColor={colors[2].hex}></Letter>
    <Letter letter="n" fontColor={colors[3].hex}></Letter>
    <Letter letter="b" fontColor={colors[4].hex}></Letter>
    <Letter letter="o" fontColor={colors[5].hex}></Letter>
    <Letter letter="w" fontColor={colors[6].hex}></Letter>
    </View>
    </>
  );
}

interface ILetter {
  letter:string,
  fontColor?:string
}

const Letter = ({letter, fontColor}: ILetter) => {
  return(
    <>
    <Text style={{ fontSize: 30, color: fontColor }}>
       {letter}
    </Text>
    </>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
  },
  body: {
    flexDirection:"row",
    height:"80%",
  }
});
