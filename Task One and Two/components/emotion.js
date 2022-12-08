import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import Footer from '../components/footer';
import { AntDesign } from '@expo/vector-icons';

export default function Read ({ navigation }) {
  return (
    <View style={styles.container}>
    <View style={styles.back}>
      <Pressable onPress={() => navigation.navigate('Write')}>
        <AntDesign name="back" size={24} color="black" />
      </Pressable>
    </View>
      <View style={styles.whole}>
        <View style={styles.top}>
          <Image source={require("../assets/PandaHeader.png")}/>
        </View>
        <Text style={styles.title}>What emotions does this story describe? </Text>

        <View style={styles.box}>
          <View style={styles.three}>
            <View style ={styles.panda}>
              <Image source={require("../assets/angryPanda.png")} style = {styles.emoji}/>
              <Text> Angry </Text>
            </View>

            <View style ={styles.panda}>
              <Image source={require("../assets/sadPanda.png")} style = {styles.emoji}/>
              <Text> Sad </Text>
            </View>

            <View style ={styles.panda}>
              <Image source={require("../assets/neutralPanda.png")} style = {styles.emoji}/>
              <Text> Neutral </Text>
            </View>
          </View>

          <View style={styles.three}>
            <View style ={styles.panda}>
              <Image source={require("../assets/happyPanda.png")} style = {styles.emoji}/>
              <Text> Happy </Text>
            </View>

            <View style ={styles.panda}>
              <Image source={require("../assets/funnyPanda.png")} style = {styles.emoji}/>
              <Text> Funny </Text>
            </View>

            <View style ={styles.panda}>
              <Image source={require("../assets/funnyPanda.png")} style = {styles.emoji}/>
              <Text> Excited </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <View style={styles.draft}>
          <Button title="Save Draft"/>
        </View>
        <View style={styles.continue}>
          <Button title="Continue" onPress={() => navigation.navigate('Privacy')}/>
        </View>
      </View>
      <Footer navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFDDA8',
  },
  back: {
    paddingTop: 40,
    paddingLeft: 20,
  },
  panda: {
    alignItems: 'center',
    margin: 15,
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
    paddingTop: 10,
    backgroundColor: '#CFDDA8',
    padding: 8,
  },
  title: {
    padding: 10,
    fontSize: 32,
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 300,
    width: 350,
    alignItems: 'center',
    padding: 20,
  },
  three: {
    flexDirection: 'row',
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
