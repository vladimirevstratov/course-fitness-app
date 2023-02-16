import React from 'react';
import {View, SafeAreaView, Image, ScrollView} from 'react-native';
import Button from '../../components/button/button';
import Form from '../../components/form/form';
import InputRow from '../../components/input-row/input-row';
import styles from './add-activity.styles';

const AddActivity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView styles={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Image
            source={require('../../assets/images/activity-placeholder.jpg')}
            style={styles.image}
          />
          <Form />
        </View>
      </ScrollView>
      <Button text={'SAVE'} style={styles.saveButton} />
    </SafeAreaView>
  );
};

export default AddActivity;
