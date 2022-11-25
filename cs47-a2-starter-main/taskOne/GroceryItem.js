import { StyleSheet, Text, View, Image } from 'react-native';

export default function GroceryItem({ name, id, nickname, diagnosisStatus, timeStamp}) {
  return (
    <View style={styles.item}>
      <View style={styles.textSection}>
        <Text style={[styles.name, { color: 'black'}, {fontSize: 20}]}>{name}</Text>
        <View style={[styles.info]}>
          <Text style={{ color: 'black'}, {fontSize: 10}}>{timeStamp}</Text>
          <View>
            <Text style={[ {fontWeight: '600'}, {fontSize: 16}]}>{nickname}</Text>
            <Text style={[ {fontWeight: '400'}, {fontSize: 12}, {textDecorationLine: 'underline'}]}>{diagnosisStatus}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textSection: {
    flex: 1,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: 'black',
    borderWidth: 1,
    padding: 4,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    margin: 10,
    resizeMode: 'contain'
  }
});
