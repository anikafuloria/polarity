import { Text, View, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import GroceryItem from './GroceryItem';

export default function StoryOne() {
  const groceryListData = [
    {
      id: '1',
      timeStamp: '2:12 PM, November 1, 2022',
      name: 'My Awful Internship Exeperience',
      nickname: 'Bannana',
      diagnosisStatus: 'Diagnosed 3 years ago',
    },
    {
      id: '2',
      timeStamp: '2:12 PM, November 1, 2022',
      name: 'New to SWE? My Recs?',
      nickname: 'Anonymous',
      diagnosisStatus: 'Not Diagnosed',
    },
    {
      id: '3',
      timeStamp: '2:12 PM, November 1, 2022',
      name: 'How should I tell my manager I am struggling',
      nickname: 'peterrabbit',
      diagnosisStatus: 'Diagnosed 2 years ago',
    },
    {
      id: '4',
      timeStamp: '2:12 PM, November 1, 2022',
      name: 'Ranting about my boss',
      nickname: 'Anonymous',
      diagnosisStatus: 'Not Diagnosed',
    },
    {
      id: '5',
      timeStamp: '2:12 PM, November 1, 2022',
      name: 'The term disability',
      nickname: 'Banna',
      diagnosisStatus: 'Diagnosed 3 years ago',
    },
  ];

  const renderGroceryItem = ({ item, index }) => (
    <GroceryItem
      name={item.name}
      id={item.id}
      timeStamp={item.timeStamp}
      nickname={item.nickname}
      diagnosisStatus={item.diagnosisStatus}/>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={groceryListData} // the array of data that the FlatList displays
        renderItem={(item) => renderGroceryItem(item)} // function that renders each item
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
