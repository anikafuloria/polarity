import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Pressable} from "react-native";

const SpotifyConnect = ({authButton}) => {

return <Pressable style={styles.button} onPress={authButton}>
    <Image source={require('../assets/spotify-logo.png')} style = {styles.logo}/>
    <Text style={styles.text}>Connect with Spotify</Text>
  </Pressable>
};

export default SpotifyConnect

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191414',
  },

  logo: {
    height: 20,
    width: 20,
    marginRight: 20,
  },

  button: {
    backgroundColor: '#1DB954',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 99999,
  },

});
