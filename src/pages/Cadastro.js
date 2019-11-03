import React from 'react';
import {
  StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  cores, degrades, stylesComponents,
} from '../constantes';

import Header from '../components/Header';

const Cadastro = (props) => {
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

        <ScrollView style={styles.scroll} contentContainerStyle={{ alignItems: 'center' }}>

          <Text style={styles.logo}>Logo do App</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="ios-person" size={30} color="#0008" />
            <TextInput autoCapitalize="words" style={styles.input} placeholder="Nome completo" />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="ios-document" size={30} color="#0008" />
            <TextInput keyboardType="number-pad" style={styles.input} placeholder="CPF" />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="ios-call" size={30} color="#0008" />
            <TextInput keyboardType="phone-pad" style={styles.input} placeholder="Telefone (99) 99999-9999" />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="md-mail" size={30} color="#0008" />
            <TextInput style={styles.input} placeholder="Email" />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="md-key" size={30} color="#0008" />
            <TextInput secureTextEntry style={styles.input} placeholder="Senha" />
          </View>

          <TouchableOpacity style={styles.botaoCadastrar}>
            <Text style={styles.textBotaoCadastrar}>
          Cadastrar
            </Text>
          </TouchableOpacity>

        </ScrollView>

      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 30,
    marginVertical: 25,
  },
  inputContainer: {
    ...stylesComponents.inputcontainer,
  },
  input: {
    ...stylesComponents.input,
  },
  scroll: {
    borderWidth: 0,
    borderColor: 'black',
    alignSelf: 'stretch',
  },
  botaoCadastrar: {
    borderWidth: 0,
    marginHorizontal: 25,
    borderRadius: 15,
    backgroundColor: cores.primaria,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 5,
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  textBotaoCadastrar: {
    fontSize: 25,
    color: '#FFF',
  },

});

export default Cadastro;
