import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { degrades } from '../constantes';
import Header from '../components/Header';

const Main = ({ navigation }) => {
  function handleLogout() {

  }

  return (
    <>
      <Header navigation={navigation} botaoMenu />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={degrades.d1}
        style={styles.container}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogout}>
            <Text style={styles.textButton}>Tela 1</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
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

export default Main;
