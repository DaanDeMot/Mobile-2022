import React, {useState} from "react";
import {View, TextInput, Button, Alert, Text} from "react-native";

const TextInputComp = () => {
    const [text, setText] = useState("");

    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <TextInput
                style={{height: 40, borderColor: "gray", borderWidth: 1}}
                onChangeText={text => setText(text)}
                value={text}
            />
            <Text>You typed: {text}</Text>
            <Button title="Show Value" onPress={() => { Alert.alert(text); }}/>
        </View>
    )
}

export default TextInputComp;