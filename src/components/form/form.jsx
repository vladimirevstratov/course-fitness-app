import React, {useState} from 'react';
import InputRow from '../input-row/input-row';
import {View} from 'react-native';

const Form = () => {
  const [formValues, setFormValues] = useState({
    activityType: null,
    date: null,
    duration: null,
    description: null,
  });

  return (
    <View>
      <InputRow
        label={'Activity type'}
        value={formValues.activityType}
        onChange={text => setFormValues({...formValues, activityType: text})}
        placeholder={'Basketball'}
      />
      <InputRow
        label={'Date'}
        value={formValues.date}
        onChange={text => setFormValues({...formValues, date: text})}
      />
      <InputRow
        label={'Duration'}
        value={formValues.duration}
        onChange={text => setFormValues({...formValues, duration: text})}
      />
      <InputRow
        label={'Description'}
        value={formValues.description}
        onChange={text => setFormValues({...formValues, description: text})}
      />
    </View>
  );
};

export default Form;
