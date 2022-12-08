import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import HeaderTwo from './headerTwo';
import CompanyData from './companyData';
import Footer from './footer';

export default function Body ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.panda}>
        <Image source={require("../assets/PandaHeader.png")}/>
      </View>

      <View style={styles.main}>
        <View style={styles.story}>
          <CompanyData/>
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
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CFDDA8',
    paddingBottom: 500,
  },
  filter: {
    backgroundColor: 'gray',
    borderRadius: 10,
    marginLeft: 250,
  },
  story: {
    width: 330,
    height: 450,
  },
  panda: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#CFDDA8',
    padding: 8,
    paddingBottom: 10,
  },
});
