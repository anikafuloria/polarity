import React from "react";
import { View, Text, StyleSheet, Image, Button, Pressable, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Footer from './footer';

export default function Body ({ navigation }) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.panda}>
          <Image source={require("../assets/PandaHeader.png")}/>
        </View>
        <Text style={{fontSize: 20, marginTop: 70, margin: 10}}>Why are you interested in collaborating with Dalesforce?</Text>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Type here."
          keyboardType="numeric"
        />

        <Text style={{fontSize: 20}}>What story do you want to share?</Text>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Type here."
          keyboardType="numeric"
        />

        <Pressable onPress={() => navigation.navigate('Home')}>
          <View style={styles.shareButton}>
            <Text style={{fontSize: 20}}>Share Profile and Confirm</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Home')}>
          <View style={styles.updateButton}>
            <Text style={{fontSize: 20}}>Update Profile and Confirm</Text>
          </View>
        </Pressable>
      </View>

      <Footer navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 160,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#CFDDA8',
  },
  shareButton: {
    backgroundColor: '#772D8B',
    borderRadius: 10,
    height: 56,
    width: 350,
    marginTop: 8,
    alignItems: 'center',
    paddingTop: 20,
  },
  updateButton: {
    backgroundColor: '#C6C6C6',
    borderRadius: 10,
    height: 56,
    width: 350,
    marginTop: 8,
    alignItems: 'center',
    paddingTop: 20,
  },
  panda: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#CFDDA8',
    padding: 8,
    paddingBottom: 10,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CFDDA8',
    paddingBottom: 300,
  },
});
