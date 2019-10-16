import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const Cadastro = function ({ navigation }) {

  return (    
    <View style={styles.container} >
      <Text style={styles.text}>Tela de Cadastro</Text>
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

export default Cadastro;
