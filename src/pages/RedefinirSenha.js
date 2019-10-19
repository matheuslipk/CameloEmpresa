import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

import { cores, degrades } from '../constantes'

const RedefinirSenha = function ({ navigation }) {

  return (    
    <LinearGradient colors={degrades.d1} style={styles.container} >
      
      <View style={styles.inputContainer}>
        <Icon name="md-mail" size={30} color="#0008" />
        <TextInput autoCapitalize="none" keyboardType="email-address" 
            style={ styles.input } placeholder="Digite seu email"/>
      </View>

      <Text style={{fontSize: 20, fontWeight: 'bold', color: "#888"}}>
        OU
      </Text>

      <View style={styles.inputContainer}>
        <Icon name="md-call" size={30} color="#0008" />
        <TextInput autoCapitalize="none" keyboardType="email-address" 
            style={ styles.input } placeholder="Digite seu número de telefone"/>
      </View>

      <TouchableOpacity style={styles.buttonEntrar}>
        <Text style={styles.textButton}>Recuperar Senha</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{

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
    fontSize: 16
  },
  buttonEntrar:{
    padding: 5,
    marginTop: 20,
    backgroundColor: cores.primaria,
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'stretch',
    marginHorizontal: 25
  },
  textButton:{
    fontSize: 25,
    color: "#FFF"
  },

});

export default RedefinirSenha;
