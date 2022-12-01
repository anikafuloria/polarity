import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import HeaderTwo from './headerTwo';
import Footer from './footer';

export default function Home ({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={styles.panda}>
          <Image source={require("../assets/PandaHeader.png")}/>
        </View>

        <View style={styles.body}>
          <Pressable onPress={() => navigation.navigate('Write')}>
            <View style={styles.type}>
              <Entypo name="pencil" size={50} color="black" style = {styles.icons}/>
              <Text style={{fontSize: 20}}> type story </Text>
            </View>
          </Pressable>

          <View style={styles.record}>
            <FontAwesome name="microphone" size={50} color="black" />
            <Text style={{fontSize: 20}}>record story </Text>
          </View>
        </View>

        <Footer />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFDDA8',
  },
  panda: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#CFDDA8',
    padding: 8,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CFDDA8',
    paddingBottom: 300,
  },
  type: {
    backgroundColor: '#E1EAC7',
    borderRadius: 10,
    height: 125,
    width: 130,
    alignItems: 'center',
    paddingTop: 20,
  },
  record: {
    backgroundColor: '#E1EAC7',
    borderRadius: 10,
    height: 125,
    width: 130,
    marginTop: 48,
    alignItems: 'center',
    paddingTop: 20,
  },

});
