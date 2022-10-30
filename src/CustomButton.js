import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const CustomButton = ({onPressHandler, title}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {backgroundColor: pressed ? '#ddd' : 'orange'},
        styles.button,
      ]}
      android_ripple={{color: '#00f'}}
      onPress={onPressHandler}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 15,
    margin: 10,
  },
  button: {
    // backgroundColor: 'orange',
    height: 40,
    width: 80,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'orange',
    color: '#000',
    textAlign: 'center',
    // paddingTop: 10,
  },
});

export default CustomButton;
