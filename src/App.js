import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simples from './components/simples';
import ParImpar from './components/parimpar';

export default function App() {
  return (
    <View style={styles.container}>
      <Simples texto="Primeiro App em React!"/>
      <ParImpar numero={11}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
