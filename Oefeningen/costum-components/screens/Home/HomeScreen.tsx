import { View, Text, StyleSheet } from "react-native";
import Rainbow from "../../components/Rainbow/Rainbow";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Rainbow viewStyleProps={{alignItems:'stretch'}}boxHeight={10}></Rainbow>
    <View style={styles.body}>
    <Rainbow viewStyleProps={{ flexDirection: "row", flex:1, justifyContent:"space-around", width:"45%"}} boxWidth={10} boxHeight="100%"></Rainbow>
    <Rainbow viewStyleProps={{width:"45%", justifyContent:"space-around", alignItems:'center'}} boxWidth={50} boxHeight={50}></Rainbow>
    </View>

  </View>
  );
}


const styles = StyleSheet.create({
    container:{
    flex:1,
    width:"100%",
    borderWidth:1,
    borderColor:"black",
    alignItems: 'stretch',
    display:'flex',
    flexDirection:'column',
},
body: {
    flexDirection:"row",
    height:"80%",
  }
});