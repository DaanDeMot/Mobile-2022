import React from "react";
import { Text, View, StyleSheet, Button, Image, TextInput, Alert, Pressable} from "react-native";


const App = () => {
  return (
    <View style={styles.container}>
        <Image 
                style={styles.image} 
                source={
                require("../CoreComponents/assets/wtf.png")}/>

        <Pressable  
        delayLongPress={3000}
        onLongPress={() => {
          Alert.alert("Ratteeuuu");
      }}
        >
        <Image
                style={styles.image}
                source={{
                uri: "data:image/jpeg;base64,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",
            }}
            />
          </Pressable>


      <Text>{random0To10()} </Text>
      <Text style={styles.boldText}>{random0To10()} </Text>
      <View style={styles.subView}>
        <Text style={styles.subViewText}>Subview</Text>  
      </View>

      <TextInput style={styles.textInput} placeholder="Enter password" secureTextEntry={true} onSubmitEditing={(event) => {
                    Alert.alert(event.nativeEvent.text);
                }}></TextInput>
      <Button
                title="Random"
                onPress={() => {
                    Alert.alert(random0To10());
                }}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#55",
  },
  boldText :{
    fontWeight: "bold"
  },
  subView:{
    borderColor: "red",
    borderWidth : 2,
    width: 100,
    paddin :10
  },
  subViewText:{
    color: "white",
    backgroundColor :"blue"
  },
  image: {
    width: 100,
    height: 100
  },
  textInput:{
    borderColor: "black",
    borderWidth:1,
  },
  button:{
    backgroundColor: "red"
  }
});



function random0To10() {
  return(
    "Het getal is: " + Math.floor(Math.random()*10) 
  );
}

export default App;