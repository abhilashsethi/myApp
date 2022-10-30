// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from './CustomButton';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
const COLORS = {primary: '#1f145c', white: '#fff'};

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Main = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.body}>
      <View>
        <View>
          <Text>Navigation</Text>
        </View>
      </View>

      <Text>Please Write Your Name </Text>

      <CustomButton title={'click'} onPressHandler={handleSubmit} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   header: () => null
      // }}
      >
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
          // options={{
          //   header: () => null
          // }}
        />
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
