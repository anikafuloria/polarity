import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Footer from '../components/footer';
import { Entypo } from '@expo/vector-icons';

export default function Body ({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.body}>
        <View style={styles.panda}>
          <Image source={require("../assets/PandaHeader.png")}/>
        </View>
        <Pressable onPress={() => navigation.navigate('OneOnOnes')}>
          <View style={styles.speaker}>
            <Text style={{fontSize: 20}}>1-on-1</Text>
            <Text style={{fontSize: 20}}>Meet others with bipolar disorder</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Speaker')}>
          <View style={styles.speaker}>
            <Text style={{fontSize: 20}}>Speaker</Text>
            <Text style={{fontSize: 20}}>Share your experience with others.</Text>
          </View>
        </Pressable>
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
  ononone: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 125,
    width: 250,
    alignItems: 'center',
    paddingTop: 20,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CFDDA8',
    paddingBottom: 300,
  },
  speaker: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 125,
    width: 250,
    marginTop: 48,
    alignItems: 'center',
    paddingTop: 20,
  },
  panda: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#CFDDA8',
    padding: 8,
    paddingBottom: 100,
  },
});
