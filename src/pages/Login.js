import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, TextInput, ToastAndroid, View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-community/async-storage';
import { cores, varAsyncStorage, degrades } from '../constantes';
import { login } from '../store/actions/user';

const Login = (props) => {
  const { loginAction, navigation } = props;
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function onChangeEmail(text) {
    setEmail(text);
  }

  function onChangeSenha(text) {
    setSenha(text);
  }

  function handleLogin() {
    if (senha === '123456') {
      AsyncStorage.setItem(varAsyncStorage.usuario, 'Matheus Araujo');
      loginAction();
    } else {
      ToastAndroid.show('Usuário ou senha incorreta', ToastAndroid.SHORT);
    }
  }

  function navigateToForgoutPassword() {
    navigation.navigate('RedefinirSenha');
  }

  function navigateToCreateAcount() {
    navigation.navigate('Cadastro');
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={degrades.d1}
      style={styles.container}
    >
      <Text style={styles.logo}>Logo do App</Text>

      <View style={styles.inputContainer}>
        <Icon name="md-person" size={30} color="#0008" />
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
          placeholder="Digite seu usuário ou email"
          value={email}
          onChangeText={(text) => onChangeEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="md-key" size={30} color="#0008" />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={(text) => onChangeSenha(text)}
        />
      </View>

      <Text onPress={navigateToForgoutPassword} style={styles.textLink}>
        Esqueci minha senha
      </Text>

      <TouchableOpacity onPress={handleLogin} style={styles.buttonEntrar}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>

      <Text onPress={navigateToCreateAcount} style={styles.textCreatAccount}>
        Não tem conta?
        {' '}
        <Text style={styles.textLink}>Registre-se aqui</Text>
      </Text>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    marginBottom: 50,
  },
  inputContainer: {
    borderColor: '#000',
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    paddingVertical: 0,
    backgroundColor: '#FFFFFF88',
    marginHorizontal: 25,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  textLink: {
    color: cores.linkPrimario,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  buttonEntrar: {
    padding: 5,
    marginTop: 20,
    backgroundColor: cores.primaria,
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'stretch',
    marginHorizontal: 25,
    marginBottom: 20,
  },
  textButton: {
    fontSize: 25,
    color: '#FFF',
  },
  textCreatAccount: {
    position: 'absolute',
    bottom: 0,
    fontSize: 15,
  },

});

const mapDispatchToProps = (dispatch) => bindActionCreators({ loginAction: login }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
