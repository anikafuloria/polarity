import {View, Text, StyleSheet, Image, TextInput} from "react-native";
import React, { useState } from 'react';
import Constants from 'expo-constants';

const HeaderTwo = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/PandaHeader.png")} style = {styles.panda}/>

      <TextInput
        style={styles.textInput}
        value={text} // the text variable in the state is displayed by the TextInput
        placeholder="Story Title"
        onChangeText={(newText) => setText(newText)} // we update the text variable whenever the text in the TextInput is changed
      />
    </View>
  );
}

export default HeaderTwo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
