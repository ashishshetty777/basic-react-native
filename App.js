/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

import ColorBox from './components/ColorBox';

const colours = [
  {
    color: 'Cyan',
    hexCode: '#2aa198',
  },
  {
    color: 'Blue',
    hexCode: '#268bd2',
  },
  {
    color: 'Magenta',
    hexCode: '#d33682',
  },
  {
    color: 'Orange',
    hexCode: '#cb4b16',
  },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={style.container}>
            <Text style={style.headerText}>
              {' '}
              Here are some boxes of different colours.
            </Text>
            <View>
              {colours.map(elem => {
                return <ColorBox key={elem.hexCode} elem={elem} />;
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'beige',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  colorBox: {
    padding: 10,
    marginVertical: 5,
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
