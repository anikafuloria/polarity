import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Body ({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('ScreenOne')}>
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
  );
}

const styles = StyleSheet.create({
  container: {
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
