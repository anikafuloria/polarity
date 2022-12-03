// person is a tab with information about a single person from the one-on-ones tab
// the top has the same info as oneonones.js
// there are two vertical sections on "has advice on" and "hobbies"
// at the bottom, there is a note about the next availability + a button to schedule

import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Body ({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Speaker')}>
        <View style={styles.oneonone}>
          <Text style={{fontSize: 20}}> 1-on-1 </Text>
          <Text style={{fontSize: 20}}> Meet others with bipolar disorder. </Text>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Speaker')}>
        <View style={styles.speaker}>
          <Text style={{fontSize: 20}}> Speaker </Text>
          <Text style={{fontSize: 20}}> Share your experience with others. </Text>
        </View>
      </Pressable>
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
  ononone: {
    backgroundColor: '#E1EAC7',
    borderRadius: 10,
    height: 125,
    width: 130,
    alignItems: 'center',
    paddingTop: 20,
  },
  speaker: {
    backgroundColor: '#E1EAC7',
    borderRadius: 10,
    height: 125,
    width: 130,
    marginTop: 48,
    alignItems: 'center',
    paddingTop: 20,
  },

});
