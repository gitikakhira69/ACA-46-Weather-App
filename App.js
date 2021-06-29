import { SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import { View } from 'react-native';
import Appbar from './components/appbar';
import Search from './components/search';

export default function App() {
  return (
    <SafeAreaProvider>
    <View>
      <Appbar/>
      <Search/>
    </View>
    </SafeAreaProvider>
  );
}


