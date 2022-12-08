import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import HeaderTwo from './headerTwo';
import CompanyData from './companyData';
import Footer from './footer';

export default function Body ({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderTwo/>

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
    paddingBottom: 400,
  },
  filter: {
    backgroundColor: 'gray',
    borderRadius: 10,
    marginLeft: 250,
  },
  story: {
    width: 330,
    height: 450,
  }
});
