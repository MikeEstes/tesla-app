import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

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
  );
};

export default CarItem;
