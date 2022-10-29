import React, {useState} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [items, setItems] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
  ]);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ];

  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    setItems([...items, {name: 'Item 9'}]);
    setRefreshing(false);
  };

  return (
    <View style={styles.body}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <Text style={styles.text}>{item}</Text>;
        }}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
      />

      {/* <FlatList
        // numColumns={2}
        // horizontal={true}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#ff00ff']}
          />
        }
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      /> */}

      {/* <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#ff00ff']}
          />
        }>
        {items.map((item, index) => {
          return (
            <View style={styles.item} key={index}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',

    backgroundColor: COLORS.white,
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
});

export default App;
