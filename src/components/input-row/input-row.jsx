import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './input-row.styles';

const InputRow = ({label, value, onChange, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={text => onChange(text)}
        placeholder="Basketball"
        style={styles.input}
      />
    </View>
  );
};

export default InputRow;
