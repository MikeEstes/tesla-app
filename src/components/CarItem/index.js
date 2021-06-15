// Import Dependencies
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';

// Create component
const CarItem = ({ image, title, subtitle }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../../assets/images/ModelS.jpeg')}
        style={styles.carImage}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

// Export Component
export default CarItem;
