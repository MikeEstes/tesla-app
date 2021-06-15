import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = ({ title, subtitle, subtitleCTA, image }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.carImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subtitle} <Text style={styles.subtitleCTA}>{subtitleCTA}</Text>
        </Text>
      </View>

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
    </View>
  );
};

export default CarItem;
