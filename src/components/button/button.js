import React from "react";
import { Text, View } from "react-native";

const Welcome = (props) => {
  const name = "Иван-Царевич";
  const element = (
    <Text key="1" style={styles.text}>
      Привет, {name}
    </Text>;
  );

  return (
    <>
      <View>{element}</View>
    </>
  );
}
