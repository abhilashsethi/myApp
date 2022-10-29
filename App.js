import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text>Please Write Your Name </Text>
      <TextInput
        // editable={false}
        style={styles.input}
        // keyboardType="phone-pad"
        placeholder={'Enter Your Name'}
        onChangeText={value => {
          setName(value);
        }}
      />
      <Text>Your Name is : {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 40,
    margin: 10,
  },
  item: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  input: {
    width: 200,
    borderColor: '#555',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default App;
