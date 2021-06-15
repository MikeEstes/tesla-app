import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './src/components/CarsList';
import Header from './src/components/Header';
import StyledButton from './src/components/StyledButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <View style={styles.buttonContainer}>
        <StyledButton
          type='primary'
          content='Custom Order'
          onPress={() => {
            console.log('Custom Order Completed');
          }}
        />
        <StyledButton
          type='secondary'
          content='Existing Inventory'
          onPress={() => {
            console.log('Loading Existing Inventory');
          }}
        />
      </View>
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

  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});
