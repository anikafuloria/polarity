import {View, Text, StyleSheet, Image, Button, Pressable, TextInput} from "react-native";
import Footer from '../components/footer';
import { AntDesign } from '@expo/vector-icons';
import HeaderTwo from './headerTwo';
import React, { useState } from 'react';

export default function Write ({ navigation }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
        <View style={styles.top}>
          <Pressable onPress={() => navigation.navigate('Home')}>
              <AntDesign name="back" size={24} color="black" />
          </Pressable>
          <HeaderTwo />
        </View>
        <View style={styles.whole}>
        <TextInput
          style={styles.textInput}
          value={text} // the text variable in the state is displayed by the TextInput
          placeholder=""
          onChangeText={(newText) => setText(newText)} // we update the text variable whenever the text in the TextInput is changed
        />
        </View>
      <View style={styles.button}>
        <View style={styles.draft}>
          <Button title="Save Draft"/>
        </View>
        <View style={styles.continue}>
          <Button title="Continue" onPress={() => navigation.navigate('Emotion')}/>
        </View>
      </View>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFDDA8',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  whole: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#CFDDA8',
    padding: 8,
  },
  caption: {
    paddingLeft: 5,
    paddingTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  textInput: {
    width: '80%',
    height: 400,
    padding: 8,
    backgroundColor: 'white',
    marginTop:0,
  },
  draft: {
    backgroundColor: '#C6C6C6',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 170,
  },
  continue: {
    backgroundColor: '#772D8B',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
  }
});
