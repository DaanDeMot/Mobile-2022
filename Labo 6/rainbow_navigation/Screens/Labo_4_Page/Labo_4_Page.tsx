import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Constants from "expo-constants";
import { Footer } from "../../components/Footer/Footer";
import { Rainbow } from "../../components/Rainbow/Rainbow";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Labo_4_Page() {
  const [footer, setFooter] = useState<string>("Rainbow");
  const [pastelColor, setPastelColor] = useState<string>("true");
  const [randomizeColor, setRandomizeColor] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const valueFooter = await AsyncStorage.getItem("footer");
      const valuePastel = await AsyncStorage.getItem("pastelColor");
      if (valueFooter !== null && valuePastel !== null) {
        setFooter(valueFooter);
        setPastelColor(valuePastel);
      }
    };
    getData();
  }, []);

  const storeData = async (text: string) => {
    await AsyncStorage.setItem("footer", text);
    setFooter(text);
  };

  const storePastelChoice = async () => {
    const valuePastel = await AsyncStorage.getItem("pastelColor");
    if (pastelColor === "true") {
      setPastelColor("false");
      await AsyncStorage.setItem("pastelColor", "false");
    } else if (pastelColor === "false") {
      await AsyncStorage.setItem("pastelColor", "true");
      setPastelColor("true");
    } else {
      console.log("wtf " + pastelColor);
    }
  };

  return (
    <View style={styles.container}>
      <Rainbow
        styleProps={{ alignItems: "stretch" }}
        boxHeight={10}
        pastelColor={pastelColor}
        randomize={randomizeColor}
      ></Rainbow>
      <TextInput
        onChangeText={(text) => storeData(text)}
        style={styles.input}
      ></TextInput>

      <Button
        title={"Change Colors"}
        onPress={() => {
          storePastelChoice();
        }}
      ></Button>
      <Button
        title={"Randomize Colors"}
        onPress={() => {
          setRandomizeColor(!randomizeColor);
        }}
      ></Button>

      <View style={styles.body}>
        <Rainbow
          randomize={randomizeColor}
          pastelColor={pastelColor}
          styleProps={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            width: "45%",
          }}
          boxWidth={10}
          boxHeight="100%"
        ></Rainbow>
        <Rainbow
          randomize={randomizeColor}
          pastelColor={pastelColor}
          styleProps={{
            width: "45%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          boxWidth={50}
          boxHeight={50}
        ></Rainbow>
      </View>

      <Footer
        pastelColor={pastelColor}
        text={footer}
        styleProps={{
          flexDirection: "row",
          height: 100,
          alignItems: "center",
          alignSelf: "center",
        }}
      ></Footer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
  },
  body: {
    flexDirection: "row",
    height: "50%",
  },
  input: {
    borderColor: "black",
    borderWidth: 3,
    height: "4%",
  },
});
