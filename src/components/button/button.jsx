import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({text, isActive, onPress}) => {
  return (
    <TouchableOpacity disabled={!isActive} onPress={() => onPress(!isActive)}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
