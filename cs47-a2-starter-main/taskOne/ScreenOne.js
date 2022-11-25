import { Text, View, StyleSheet, Button } from 'react-native';
import HeaderOne from './headerOne';
import Filter from './filter';
import StoryOne from './storyOne';


export default function ScreenOne({ navigation }) {
  return (

    <View style={styles.container}>
      <HeaderOne/>
      <View style={styles.box}>
        <Button title="Filter" onPress={() => navigation.navigate('Home')}/>
      </View>
      <View style={styles.story}>
        <StoryOne/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CFDDA8',
    paddingBottom: 610,
  },
  textInput: {
    paddingRight: 250,
    height: 44,
    padding: 8,
    backgroundColor: '#E1EAC7',
  },
  box: {
    backgroundColor: 'gray',
    borderRadius: 10,
    marginLeft: 250,
    marginTop: 10,
  },
  story: {
    paddingTop: 60,
    width: 300,
    height: 600,
  }
});
