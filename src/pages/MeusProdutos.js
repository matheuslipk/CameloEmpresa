import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
} from 'react-native';

import { cores, degrades } from '../constantes'
import LinearGradient from 'react-native-linear-gradient'

const MeusProdutos = function (props) {

  function handleLogout(){
    
  }

  return (    
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={degrades.d1} style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogout}>
          <Text style={styles.textButton}>Tela 2</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
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

export default MeusProdutos;
