import React, {useState} from 'react';
import {View, SafeAreaView, Image, ScrollView} from 'react-native';
import Button from '../../components/button/button';
import Form from '../../components/form/form';
import styles from './add-activity.styles';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const AddActivity = ({closeAddActivity, addActivity}) => {
  const [formValues, setFormValues] = useState({
    id: uuidv4(),
    name: null,
    date: null,
    imageUrl: null,
    duration: null,
    description: null,
  });

  const handleSavePress = () => {
    addActivity({activity: {...formValues, date: new Date()}});
    closeAddActivity();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView styles={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Image
            source={require('../../assets/images/activity-placeholder.jpg')}
            style={styles.image}
          />
          <Form values={formValues} setValues={setFormValues} />
        </View>
      </ScrollView>
      <Button
        text={'SAVE'}
        style={styles.saveButton}
        onPress={handleSavePress}
      />
    </SafeAreaView>
  );
};

export default AddActivity;
