import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";

import SpotifyConnect from './components/spotify';
import FlatListh from './components/flatList';

import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SongDetails } from './components/iSong';
import { SongPreview } from './components/iSong';

const Stack = createStackNavigator();

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks

  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;

  function SongList ({navigation}) {
    if (token) {
      contentDisplayed = <FlatListh trackListData={tracks} navigation={navigation}></FlatListh>
    } else {
      contentDisplayed = <SpotifyConnect authButton = {getSpotifyAuth}/>
    }

    return (
      <SafeAreaView style={styles.container}>
        {contentDisplayed}
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="SongList" component={SongList} options={{headerShown:false}}/>
        <Stack.Screen name ="SongDetails" component={SongDetails}/>
        <Stack.Screen name ="SongPreview" component={SongPreview}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
