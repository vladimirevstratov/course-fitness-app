import React, {useState} from 'react';
import {Text, FlatList, View, Image, TouchableOpacity} from 'react-native';
import Button from '../../components/button/button';
import styles from './activity.styles';

const CheckedText = ({isChecked}) => {
  if (isChecked) {
    return <Text>Отмечен</Text>;
  } else {
    return <Text>Не отмечен</Text>;
  }
};

const ChildComponent = ({imageSource, image}) => {
  return (
    <>
      <Image source={{uri: imageSource}} style={{width: 100, height: 100}} />
      {image}
    </>
  );
};

const Activity = ({openAddActivity, activities}) => {
  const [isButtonActive, setIsButtonActive] = useState(true);

  const handleButtonPress = isActive => {
    setIsButtonActive(isActive);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.image} />
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.date}>{item.date.toLocaleString()}</Text>
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.action}>
              <Button text={'Edit'} />
            </View>
            <View style={styles.action}>
              <Button text={'Delete'} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => openAddActivity()} text={'Add activity'} />
      <Text>List of activities</Text>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default Activity;
