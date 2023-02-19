import React, {useState} from 'react';
import InputRow from '../input-row/input-row';
import {View} from 'react-native';

const Form = ({values, setValues}) => {
  return (
    <View>
      <InputRow
        label={'Activity type'}
        value={values.name}
        onChange={text => setValues({...values, name: text})}
        placeholder={'Basketball'}
      />
      <InputRow
        label={'Date'}
        value={values.date}
        onChange={text => setValues({...values, date: text})}
      />
      <InputRow
        label={'Duration'}
        value={values.duration}
        onChange={text => setValues({...values, duration: text})}
      />
      <InputRow
        label={'Description'}
        value={values.description}
        onChange={text => setValues({...values, description: text})}
      />
    </View>
  );
};

export default Form;
