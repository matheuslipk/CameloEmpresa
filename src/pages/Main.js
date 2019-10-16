import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'

const Login = function ({ navigation }) {

  function handleLogout(){
    
  }

  return (    
    <View style={styles.container}>
      <Icon name="stepforward" size={30} color={"#000"}/>
      <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogout}>
        <Text style={styles.textButton}>Tela 0</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton:{
    fontSize: 20,
    color: "#555",
    fontWeight: 'bold'
  }

});

export default Login;
