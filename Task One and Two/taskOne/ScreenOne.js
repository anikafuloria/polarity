import { Text, View, StyleSheet, Button } from 'react-native';
import HeaderOne from './headerOne';
import HeaderTwo from '../components/headerTwo';
import Filter from './filter';
import StoryData from './storyData';
import Footer from '../components/footer';

export default function ScreenOne({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderTwo/>
      </View>
      <View style={styles.main}>
        <View style={styles.filter}>
          <Button title="Filter" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={styles.story}>
          <StoryData navigation={navigation}/>
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
  header: {
    paddingTop: 60,
    marginTop: 20,
    height: 200,
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
