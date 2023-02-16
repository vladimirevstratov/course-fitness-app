import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './button.styles';

const Button = ({text, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
