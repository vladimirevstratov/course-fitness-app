import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
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
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
