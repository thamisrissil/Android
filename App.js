import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pai from './src/FlexBox'
import FlexBox from './src/FlexBox';
import Calculadora from './src/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Calculadora></Calculadora>
      <FlexBox/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    margin:30
  },
});
