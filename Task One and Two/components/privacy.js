import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import React, { useState } from 'react';
import Footer from '../components/footer';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Privacy ({ navigation }) {
  const [anonCheck, setAnonCheck] = useState(false)
  const [privateCheck, setPrivateCheck] = useState(false)


  return (
    <View style={styles.container}>
      <View style={styles.whole}>
        <View style={styles.top}>
          <Pressable onPress={() => navigation.navigate('Emotion')}>
            <AntDesign name="back" size={24} color="black" />
          </Pressable>
          <Image source={require("../assets/PandaHeader.png")}/>
        </View>
        <Text style={styles.title}> Privacy and Visibility </Text>

        <View style={styles.box}>
          <View style={styles.check}>
            <Pressable onPress={() => {
              setAnonCheck(!anonCheck);
              }
            }>
            {anonCheck ? <AntDesign name="checksquare" size={24} color="black" /> : <Feather name="square" size={24} color="black" /> }
            </Pressable>
            <Text style={{fontSize: 24}}> Post Anonymously </Text>
          </View>
          <Text style={{fontSize: 16}}> Your post will show up as Anonymous </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.check}>
          <Pressable onPress={() => {
            setPrivateCheck(!privateCheck);
            }
          }>
          {privateCheck ? <AntDesign name="checksquare" size={24} color="black" /> : <Feather name="square" size={24} color="black" /> }
          </Pressable>
            <Text style={{fontSize: 24}}> Post Privately </Text>
          </View>
          <Text style={{fontSize: 16}}> Managers will not be able to see your post </Text>
        </View>

      </View>
      <View style={styles.button}>
        <View style={styles.draft}>
          <Button title="Safe as Draft"/>
        </View>
        <View style={styles.continue}>
          <Button title="Review" onPress={() => navigation.navigate('ScreenOne')}/>
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
  panda: {
    alignItems: 'center',
  },
  emoji: {
    width: 85,
    height: 80,
    alignItems: 'center',
    paddingBottom: 40,
  },
  top: {
    flexDirection: 'row',
  },
  whole: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#CFDDA8',
    padding: 8,
  },
  title: {
    padding: 10,
    fontSize: 32,
    fontWeight: 'bold',
  },
  check: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 125,
    width: 350,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    marginBottom: 20,
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
