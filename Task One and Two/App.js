import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import ScreenOne from './taskOne/ScreenOne';
import Read from './taskOne/read';
import Home from './components/home';
import Write from './components/write';
import Emotion from './components/emotion';
import Privacy from './components/privacy';
import Connect from './components/connect';
import Speaker from './components/speaker';
import Company from './components/company';
import OneOnOnes from './components/oneonones';
import Person from './components/person';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Company" component={Company} options={{headerShown:false}}/>
        <Stack.Screen name="Speaker" component={Speaker} options={{headerShown:false}}/>
        <Stack.Screen name="Connect" component={Connect} options={{headerShown:false}}/>

        <Stack.Screen name="OneOnOnes" component={OneOnOnes} options={{headerShown:false}}/>
        <Stack.Screen name="Person" component={Person} options={{headerShown:false}}/>

        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Write" component={Write} options={{headerShown:false}}/>
        <Stack.Screen name="Emotion" component={Emotion} options={{headerShown:false}}/>
        <Stack.Screen name="Privacy" component={Privacy} options={{headerShown:false}}/>

        <Stack.Screen name="Read" component={Read} options={{headerShown:false}}/>
        <Stack.Screen name="ScreenOne" component={ScreenOne} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFDDA8',
  },

});
