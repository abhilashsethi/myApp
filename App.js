import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(!submitted);
  };

  return (
    <View style={styles.body}>
      <Text>Please Write Your Name </Text>
      <TextInput
        // multiline
        // editable={false}
        style={styles.input}
        // keyboardType="phone-pad"
        placeholder={'Enter Your Name'}
        onChangeText={value => {
          setName(value);
        }}
      />
      {/* <Button title={submitted ? `clear` : `submit`} onPress={handleSubmit} /> */}
      {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>{submitted ? `clear` : `submit`}</Text>
      </TouchableOpacity> */}
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#ddd' : 'orange'},
          styles.button,
        ]}
        android_ripple={{color: '#00f'}}
        onPress={handleSubmit}>
        <Text style={styles.text}>{submitted ? `clear` : `submit`}</Text>
      </Pressable>
      {/* <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#ddd' : 'orange'},
          styles.button,
        ]}
        onLongPress={handleSubmit}
        // delayLongPress={2000}
      >
        <Text style={styles.text}>{submitted ? `clear` : `submit`}</Text>
      </Pressable> */}
      {submitted && <Text>Your are registered as : {name}</Text>}
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
    fontSize: 15,
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
    margin: 10,
  },
  button: {
    // backgroundColor: 'orange',
    height: 40,
    width: 80,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default App;
