import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const RedefinirSenha = function ({ navigation }) {

  return (    
    <View style={styles.container} >
      <Text style={styles.text}>Redefinir Senha</Text>
    </View>
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
