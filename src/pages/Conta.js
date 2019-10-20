import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { logout } from '../store/actions/user';
import { degrades } from '../constantes';


const Conta = (props) => {
  const { logoutAction } = props;

  async function handleLogout() {
    await AsyncStorage.removeItem('@usuario');
    logoutAction();
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={degrades.d1}
      style={styles.container}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogout}>
          <Text style={styles.textButton}>Sair</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    color: '#555',
    fontWeight: 'bold',
  },

});

const mapDispatchToProps = (dispatch) => bindActionCreators({ logoutAction: logout }, dispatch);

export default connect(null, mapDispatchToProps)(Conta);
