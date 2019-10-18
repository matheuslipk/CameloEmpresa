import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  TextInput,
  ToastAndroid,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

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

      <View style={styles.inputContainer}>
        <Icon name="md-person" size={30} color="#0008" />
        <TextInput autoCapitalize="none" keyboardType="email-address" 
            style={ styles.input } placeholder="Digite seu usuário ou email"/>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="md-key" size={30} color="#0008" />
        <TextInput secureTextEntry={true} style={ styles.input }
            placeholder="Digite sua senha"/>
      </View>
      
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
  inputContainer:{
    borderColor: "#000",
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    paddingVertical: 0,
    backgroundColor: '#FFFFFF88',
    marginHorizontal: 25,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4
  },
  input:{
    flex: 1,
    paddingHorizontal: 20,
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
