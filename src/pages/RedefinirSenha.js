import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import { cores } from '../constantes'

const RedefinirSenha = function ({ navigation }) {

  return (    
    <LinearGradient colors={cores.degrade} style={styles.container} >
      <Text style={styles.text}>Redefinir Senha</Text>
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

  }

});

export default RedefinirSenha;
