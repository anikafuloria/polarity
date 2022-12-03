import { Text, View, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import StoryItem from '../taskOne/StoryItem';

export default function StoryData(navigation) {
  const storyListData = [
    {
      id: '1',
      timeStamp: 'Thursday, 3 December 2022',
      companyname: 'Orange',
      description: 'Diversity in Fruits, 11-3PM PST',
    },
    {
      id: '2',
      timeStamp: 'Thursday, 10 December 2022',
      companyname: 'Dalesforce',
      description: 'Diversity in Technology, 2-3PM PST',
    },
    {
      id: '3',
      timeStamp: 'Friday, 18 December 2022',
      companyname: 'Oober',
      description: 'Accessibility in Holidays, 2-3PM PST',
    },
    {
      id: '4',
      timeStamp: 'Monday, 11 January 2023',
      companyname: 'Lift',
      description: 'New Year, New Goals, 2-3PM PST',
    },
  ];

  const renderStoryItem = ({ item, index }, navigation) => (
    <StoryItem
      name={item.companyname}
      id={item.id}
      timeStamp={item.timeStamp}
      diagnosisStatus={item.description}
      navigation={navigation}/>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={storyListData} // the array of data that the FlatList displays
        renderItem={(item) => renderStoryItem(item, navigation)} // function that renders each item
        keyExtractor={(item) => item.id} // unique key for each item
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#CFDDA8',
    padding: 10,
  },
  titleRow: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
