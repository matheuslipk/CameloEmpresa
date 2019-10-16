import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  TextInput,
  ToastAndroid
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import { cores } from '../constantes'

const Login = function ({ navigation }) {

  function handleLogin(){
    return;
  }

  function navigateToForgoutPassword(){
    navigation.navigate('RedefinirSenha')
    ToastAndroid.show("Esqueci a senha...", ToastAndroid.SHORT)
  }

  function navigateToCreateAcount(){
    navigation.navigate('Cadastro')
    ToastAndroid.show("Fazer cadastro", ToastAndroid.SHORT)
  }
  
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={cores.degrade} style={styles.container}>
      <Text style={styles.logo}>Logo do App</Text>

      <TextInput autoCapitalize="none" keyboardType="email-address" 
          style={ styles.input } placeholder="Digite seu usuário ou email"/>
      <TextInput secureTextEntry={true} style={ styles.input }
          placeholder="Digite sua senha"/>

      <Text onPress={navigateToForgoutPassword} style={styles.textForgout}>Esqueci minha senha</Text>

      <TouchableOpacity onPress={handleLogin} style={styles.buttonEntrar}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>

      <Text onPress={navigateToCreateAcount} style={styles.textCreatAccount}>Não tem conta? <Text style={{color: 'blue'}}>Registre-se aqui</Text></Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    fontSize: 30,
    marginBottom: 50
  },
  input:{
    borderColor: "#666",
    borderRadius: 5,
    alignSelf: 'stretch',
    paddingLeft: 20,
    marginBottom: 10,
    marginHorizontal: 25,
    backgroundColor: '#FFFFFF88'
  },
  textForgout:{
    color: '#00FF',
    textDecorationLine: 'underline',
    fontSize: 16
  },
  buttonEntrar:{
    padding: 10,
    marginTop: 20,
    backgroundColor: '#fffd',
    width: 150,
    alignItems: 'center',
    borderRadius: 10
  },
  textButton:{
    fontSize: 20,
    color: "#555",
    fontWeight: 'bold'
  },
  textCreatAccount:{
    position: 'absolute',
    bottom: 0,
    fontSize: 15
  }

});

export default Login;
