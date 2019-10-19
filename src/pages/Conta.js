import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { logout } from '../store/actions/user'
import AsyncStorage from '@react-native-community/async-storage';


const Conta = function (props, { navigation }) {

    const {logout} = props

    async function handleLogout(){
      await AsyncStorage.removeItem('@usuario')
      logout()
    }

  return (    
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogout}>
        <Text style={styles.textButton}>Sair</Text>
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

const mapDispatchToProps = (dispatch)=> 
    bindActionCreators({ logout }, dispatch)

export default connect(null, mapDispatchToProps)(Conta);
