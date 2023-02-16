import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import styles from './add-activity.styles';

const AddActivity = () => {
  const [formValues, setFormValues] = useState({
    activityType: null,
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Activity type</Text>
        <TextInput value={formValues.activityType} placeholder="Basketball" />
      </View>
    </SafeAreaView>
  );
};

export default AddActivity;
