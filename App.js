import React, {useState} from 'react';
import {
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [sections, setSections] = useState([
    {title: 'Title 1', data: ['item 1-1', 'item 1-2']},
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    const adding_index = sections.length + 1;
    setSections([
      ...sections,
      {
        title: `Title ${adding_index}`,
        data: [`item ${adding_index} -1`, `item ${adding_index} -2`],
      },
    ]);
    setRefreshing(false);
  };

  return (
    <View style={styles.body}>
      <SectionList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        keyExtractor={(item, index) => index.toString()}
        sections={sections}
        renderItem={({item}) => {
          return <Text style={styles.text}>{item}</Text>;
        }}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
      />
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
