import React, { useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, FlatList} from "react-native";
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Song from '../components/iSong';


export default function FlatListh ({trackListData, navigation}) {
  const renderTrackItem = ({ item }, navigation) => {
    return <Song
      artistName={item.artists[0].name}
      song={item.name}
      image={item.album.images[2]}
      album={item.album.name}
      duration={item.duration_ms}
      songExternalUrl = {item.external_urls.spotify}
      songPreviewUrl = {item.preview_url}
      navigation={navigation}
      />
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={require('../assets/spotify-logo.png')} style = {styles.logo}/>
        <Text style={styles.titleText}> My Top Tracks </Text>
      </View>

      <FlatList
        data={trackListData}
        renderItem={(params) => renderTrackItem(params, navigation)} //added navigation
        keyExtractor={(item, index) => item.id} //do i change the index
      />
    </SafeAreaView>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#191414',
    paddingHorizontal: 100,
  },
  logo: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    padding: '20',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
  }
});
