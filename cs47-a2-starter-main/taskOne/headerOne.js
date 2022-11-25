import {View, Text, StyleSheet, Image, TextInput, Button} from "react-native";
import React, { useState } from 'react';
import Constants from 'expo-constants';

const HeaderOne = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/PandaHeader.png")} style = {styles.panda}/>

      <TextInput
        style={styles.textInput}
        value={text} // the text variable in the state is displayed by the TextInput
        placeholder="Search"
        onChangeText={(newText) => setText(newText)} // we update the text variable whenever the text in the TextInput is changed
      />

    </View>
  );
}

export default HeaderOne

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#CFDDA8',
    padding: 8,
  },
  textInput: {
    width: '80%',
    height: 44,
    padding: 8,
    backgroundColor: 'white',
  },
});
