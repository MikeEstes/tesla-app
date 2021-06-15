import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

const StyledButton = ({ type, content, onPress }) => {
  const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
  const color = type === 'primary' ? '#ffffff' : '#171a20';

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <Text style={[styles.text, { color }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
