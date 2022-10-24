import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [name, setName] = useState('Abhilash');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const [current, setCurrent] = useState(true);
  const handleClick = () => {
    setName('Abhi');
    setSession({number: 7, title: 'new session'});
    setCurrent(false);
  };

  const {number, title} = session;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'red'}}>Learn React Native with {name}</Text>
      <Text>
        {number} {title}
      </Text>
      <Text>{current ? 'Current session' : 'Next session'}</Text>
      <Button title="click" onPress={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
