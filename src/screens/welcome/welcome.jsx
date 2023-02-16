import React from 'react';
import {Image, Text, View} from 'react-native';
import Button from '../../components/button/button';
import styles from './welcome.style';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          source={require('../../assets/images/user.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Hello! You are in team!</Text>
        <Text style={styles.description}>
          We will help you with activity monitoring and keep your workouts in
          one place.
        </Text>
        <Button text={'START'} />
      </View>
    </View>
  );
};

export default Welcome;
