import {View, Text, StyleSheet, Image} from "react-native"
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  return <View style={styles.container}>
    <View style={styles.item}>
      <Entypo name="pencil" size={24} color="black" style = {styles.icons}/>
      <Text style={styles.text}> Post </Text>
    </View>

    <View style={styles.item}>
      <FontAwesome5 name="book-reader" size={24} color="black" style = {styles.icons}/>
      <Text style={styles.text}> Read </Text>
    </View>

    <View style={styles.item}>
      <Ionicons name="people" size={30} color="black" style = {styles.icons}/>
      <Text style={styles.text}> Connect </Text>
    </View>

    <View style={styles.item}>
      <Ionicons name="person-circle" size={30} color="black" style = {styles.icons}/>
      <Text style={styles.text}> Profile </Text>
    </View>

  </View>
}
export default Footer

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 20,
    paddingRight: 30,
    paddingLeft: 30,
  },
  item: {
    alignItems: 'center',
  },
  icons: {
    height: 40,
    width: 40,
    marginLeft: 15,
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 2,
    color: 'black',
  }
});
