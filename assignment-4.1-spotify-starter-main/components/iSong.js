import React, { useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, Pressable} from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import { AntDesign } from '@expo/vector-icons';

import { WebView } from 'react-native-webview';

export default function Song({song, artistName, album, duration, image, songExternalUrl, songPreviewUrl, navigation}) {

  return (
    <Pressable onPress={() => navigation.navigate("SongDetails", { external_url: songExternalUrl })}>
      <SafeAreaView style={styles.container}>
        <Pressable onPress={(e) => {
            e.stopPropagation();
            navigation.navigate("SongPreview", {preview_url: songPreviewUrl});
          }}>
          <AntDesign style = {styles.playButton} name="play" size={24}/>
        </Pressable>
        <Image source={image} style = {styles.imageStyle}/>

        <View style = {styles.twoSong}>
          <Text style = {styles.logo} numberOfLines={1} > {song} </Text>
          <Text style = {{color: '#B3B3B3'}}> {artistName} </Text>
        </View>

        <Text style = {styles.albumStyle} numberOfLines={1} > {album} </Text>
        <Text style = {{color: '#B3B3B3'}} numberOfLines={1} > {millisToMinutesAndSeconds(duration)} </Text>
      </SafeAreaView>
    </Pressable>
  );
};

export const SongDetails = ({ navigation, route }) => {
  const { external_url } = route.params;
  return (
    <WebView source={{ uri: external_url }} />
  )
}

export const SongPreview = ({ navigation, route }) => {
  const { preview_url } = route.params;
  return (
    <WebView source={{ uri: preview_url }} />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  twoSong: {
    paddingHorizontal: 10,
  },

  logo: {
    color: 'white',
  },

  playButton: {
    color: '#1DB954',
    margin: 20,
  },

  albumStyle: {
    color: '#B3B3B3',
    flex: 5,
  }
});
