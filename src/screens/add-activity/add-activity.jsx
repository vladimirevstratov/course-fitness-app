import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Form from '../../components/form/form';
import InputRow from '../../components/input-row/input-row';
import styles from './add-activity.styles';

const AddActivity = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Form />
      </View>
    </SafeAreaView>
  );
};

export default AddActivity;
