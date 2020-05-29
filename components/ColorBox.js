import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ elem }) => {
  return (
    <View style={[style.colorBox, { backgroundColor: elem.hexCode }]}>
      <Text style={style.colorText} key={elem.hexCode}>
        {' '}
        {elem.color} {elem.hexCode}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  colorBox: {
    padding: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
