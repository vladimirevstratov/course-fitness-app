import React from 'react';
import {View, Text, TextInput} from 'react-native';

const InputRow = ({label, value, onChange, placeholder}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={text => onChange(text)}
        placeholder="Basketball"
      />
    </View>
  );
};

export default InputRow;
