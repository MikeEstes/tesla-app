import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import cars from './cars';
import CarItem from '../CarItem';
import styles from './styles';

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => {
          return <CarItem car={item} />;
        }}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
