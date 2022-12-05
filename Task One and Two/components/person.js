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
      <Text style={styles.bio}>
        Zander is a Senior Software Engineer at Orange. He graduated from Carvard University with a B.A. in Smart Fistory. He was diagnosed with Type I Bipolar Disorder (Mania) at age 16.
      </Text>
      <View style={{flexDirection:"row"}}>
        <Text style={styles.advice}>
          Advice On:
          Accomodations
          Managing Mania
          Leadership
        </Text>
        <Text style={styles.hobbies}>
          Hobbies:
          Foodie
          Basketball
          Reading
        </Text>
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
  bio: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginTop: 100,
  },
  advice: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    width: 180,
    marginTop: 120,
  },
  hobbies: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    width: 180,
    marginTop: 120,
  },

});
