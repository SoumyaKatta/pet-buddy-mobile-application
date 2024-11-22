/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
// import { StackNavigation } from './src/components/Navigation';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Welcome} from './src/screens/Welcom';
import {Login} from './src/screens/Login';
import {Register} from './src/screens/Register';
import Navigation from './src/components/Navigation';

function App(): React.JSX.Element {
  return <Navigation />;
}

export default App;
