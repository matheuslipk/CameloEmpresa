import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { cores } from '../constantes';

// import { Container } from './styles';

export function MyTextInput(props) {
  const {
    multiline, name, placeholder, value, defaultValue,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{name}</Text>
      <TextInput
        style={styles.textInput}
        multiline={multiline}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
      />
    </View>
  );
}

export function MyTextInputMultiline(props) {
  const {
    multiline, name, placeholder, value,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{name}</Text>
      <TextInput
        style={styles.textInputMultiline}
        multiline={multiline}
        placeholder={placeholder}
        value={value}
        textAlignVertical="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 5,
  },
  textName: {
    fontSize: 14,
    color: cores.textLabelInput,
  },
  textInput: {
    height: 40,
    fontSize: 16,
  },
  textInputMultiline: {
    height: 90,
    fontSize: 16,
  },
});
