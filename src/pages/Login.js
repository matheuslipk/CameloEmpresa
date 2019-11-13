import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, TextInput, ToastAndroid, View, ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import AsyncStorage from '@react-native-community/async-storage';
import { cores, varAsyncStorage, degrades } from '../constantes';
import { login } from '../store/actions/user';
import api from '../services/api';
import Header from '../components/Header';

export default function Login(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  const dispatch = useDispatch();

  function onChangeEmail(text) {
    setEmail(text);
  }

  function onChangeSenha(text) {
    setSenha(text);
  }

  async function handleLogin() {
    try {
      setCarregando(true);
      const response = await api.post('/sessions_store', {
        email,
        password: senha,
      });
      const { store, token } = response.data;
      await AsyncStorage.setItem(varAsyncStorage.token, token);
      await AsyncStorage.setItem(varAsyncStorage.store, JSON.stringify(store));
      dispatch(login(store));
    } catch (err) {
      ToastAndroid.show('Erro', ToastAndroid.SHORT);
      setCarregando(false);
    }
  }

  function navigateToForgoutPassword() {
    navigation.navigate('RedefinirSenha');
  }

  function navigateToCreateAcount() {
    navigation.navigate('Cadastro');
  }

  return (
    <>
      <Header />

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={degrades.d1}
        style={styles.container}
      >

        {
          carregando ? (
            <ActivityIndicator
              style={styles.carregando}
              size="large"
              color={cores.primaria}
            />
          ) : null
        }

        <Text style={styles.logo}>Logo do App</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="md-person" size={30} color="#0008" />
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
          <Ionicons name="md-key" size={30} color="#0008" />
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
    </>
  );
}

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
  carregando: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: '#0005',
  },
});
