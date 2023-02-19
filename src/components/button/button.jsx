import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './button.styles';

const Button = ({text, style, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => onPress && onPress()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
