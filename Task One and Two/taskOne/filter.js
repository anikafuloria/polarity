import { Text, View, StyleSheet, Button } from 'react-native';

export default function Filter ({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Filter" onPress={() => navigation.navigate('Home')}/>
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
});
