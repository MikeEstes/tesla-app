import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.carImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.tagline}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
    </View>
  );
};

export default CarItem;
