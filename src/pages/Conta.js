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
import { cores, degrades } from '../constantes'
import LinearGradient from 'react-native-linear-gradient'


const Conta = function (props) {

    const {logout} = props

    async function handleLogout(){
      await AsyncStorage.removeItem('@usuario')
      logout()
    }

  return (    
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={degrades.d1} style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogout}>
          <Text style={styles.textButton}>Sair</Text>
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

const mapDispatchToProps = (dispatch)=> 
    bindActionCreators({ logout }, dispatch)

export default connect(null, mapDispatchToProps)(Conta);
