import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './src/components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        title='Model S'
        subtitle='Starting at $69,420'
        image={require('./assets/images/ModelS.jpeg')}
      />
      <CarItem
        title='Model 3'
        subtitle='Order Online for '
        subtitleCTA='Touchless Delivery'
        image={require('./assets/images/Model3.jpeg')}
      />
      <CarItem
        title='Model X'
        subtitle='Order Online for '
        subtitleCTA='Touchless Delivery'
        image={require('./assets/images/ModelX.jpeg')}
      />
      <CarItem
        title='Model Y'
        subtitle='Order Online for '
        subtitleCTA='Touchless Delivery'
        image={require('./assets/images/ModelY.jpeg')}
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
