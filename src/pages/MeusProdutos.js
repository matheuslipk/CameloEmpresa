import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
} from 'react-native';

const MeusProdutos = function ({ navigation }) {

  function handleLogout(){
    
  }

  return (    
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogout}>
        <Text style={styles.textButton}>Tela 2</Text>
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

export default MeusProdutos;
