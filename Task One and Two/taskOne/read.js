import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import Footer from '../components/footer';
import { AntDesign } from '@expo/vector-icons';

export default function Read ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.whole}>
        <View style={styles.top}>
          <Pressable onPress={() => navigation.navigate('ScreenOne')}>
            <AntDesign name="back" size={24} color="black" />
          </Pressable>

          <Image source={require("../assets/PandaHeader.png")} style = {styles.panda}/>
        </View>
        <View style>
          <Text style={styles.caption}> Posted by Anonymous | Bipolar | Not Diagnosed</Text>
          <Text style={styles.title}> New to SWE? My Recs... </Text>
        </View>

        <View style={styles.box}>
          <Text style={{fontSize: 20}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in n reprehenderit in n reprehenderit</Text>
        </View>
      </View>
      <View style={styles.reply}>
        <Button title="Reply" onPress={() => navigation.navigate('ScreenOne')}/>
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
  title: {
    paddingTop: 10,
    fontSize: 32,
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#E1EAC7',
    borderRadius: 10,
    height: 300,
    width: 350,
    marginTop: 32,
    alignItems: 'center',
    padding: 30,
  },
  reply: {
    backgroundColor: '#772D8B',
    borderRadius: 10,
    marginLeft: 250,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  }
});
