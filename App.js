import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './src/components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        image='../../../assets/images/ModelS.jpeg'
        title='Model S'
        subtitle='Starting at $69,420'
      />
      <StatusBar style='auto' />
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
