import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CustomButton from './CustomButton';

const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = () => {
    if (name.length >= 4) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2022/10/18/20/27/old-man-7531093_960_720.jpg',
      }}
      style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        animationType="slide"
        hardwareAccelerated
        onRequestClose={() => {
          setShowWarning(false);
        }}>
        <View style={styles.container_modal}>
          <View style={styles.warning_modal}>
            <Text>The name should be longer than 3 characters</Text>
            <Pressable
              onPress={() => {
                setShowWarning(false);
              }}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text>Please Write Your Name </Text>
      <TextInput
        style={styles.input}
        placeholder={'Enter Your Name'}
        onChangeText={value => {
          setName(value);
        }}
      />
      {/* <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#ddd' : 'orange'},
          styles.button,
        ]}
        android_ripple={{color: '#00f'}}
        onPress={handleSubmit}>
        <Text style={styles.text}>{submitted ? `clear` : `submit`}</Text>
      </Pressable> */}
      <CustomButton
        title={submitted ? `clear` : `submit`}
        onPressHandler={handleSubmit}
      />
      {submitted ? (
        <View style={styles.body}>
          <Text>Your are registered as : {name}</Text>
          <Image
            source={require('../assets/done.png')}
            style={styles.img}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Image
          source={require('../assets/error.png')}
          style={styles.img}
          resizeMode="stretch"
        />
      )}
    </ImageBackground>
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
    backgroundColor: 'orange',
    color: '#000',
    textAlign: 'center',
    // paddingTop: 10,
  },
  warning_modal: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  container_modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  img: {
    width: 80,
    height: 80,
    margin: 10,
  },
});

export default App;
