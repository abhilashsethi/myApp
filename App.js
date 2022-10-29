import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';

const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.length >= 4) {
      setSubmitted(!submitted);
    } else {
      // Alert.alert(
      //   'Warning',
      //   'Name should be at least 4 characters',
      //   [
      //     {text: 'Do not show again', onPress: console.warn('Ok pressed')},
      //     {text: 'Cancel', onPress: console.warn('Ok pressed')},
      //     {text: 'OK', onPress: console.warn('Ok pressed')},
      //   ],
      //   {
      //     cancelable: true,
      //     onDismiss: () => console.warn('Alert was dismissed'),
      //   },
      // );
      ToastAndroid.showWithGravity(
        'Name should be at least 4 characters',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
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
