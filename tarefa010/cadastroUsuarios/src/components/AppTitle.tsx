import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppTitle = (props: { text: string }) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    fontWeight: "bold"
  },
});

export default AppTitle;