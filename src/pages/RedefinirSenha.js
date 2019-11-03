import React from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {
  cores, degrades, stylesComponents,
} from '../constantes';
import Header from '../components/Header';

const RedefinirSenha = (props) => {
  const { navigation } = props;
  return (
    <>
      <Header navigation={navigation} botaoVoltar />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={degrades.d1}
        style={styles.container}
      >


        <View style={styles.inputContainer}>
          <Ionicons name="md-mail" size={30} color="#0008" />
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
            placeholder="Digite seu email"
          />
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#888' }}>
        OU
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons name="md-call" size={30} color="#0008" />
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
            placeholder="Digite seu número de telefone"
          />
        </View>

        <TouchableOpacity style={styles.buttonEntrar}>
          <Text style={styles.textButton}>Recuperar Senha</Text>
        </TouchableOpacity>

      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {

  },
  inputContainer: {
    ...stylesComponents.inputcontainer,
  },
  input: {
    ...stylesComponents.input,
  },
  buttonEntrar: {
    padding: 5,
    marginTop: 20,
    backgroundColor: cores.primaria,
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'stretch',
    marginHorizontal: 25,
  },
  textButton: {
    fontSize: 25,
    color: '#FFF',
  },

});

export default RedefinirSenha;
