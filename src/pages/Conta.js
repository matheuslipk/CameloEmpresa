import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Image, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { logout } from '../store/actions/user';
import { degrades, tamanhos, cores } from '../constantes';
import Header from '../components/Header';
import loja from '../assets/loja.jpg';

const Conta = (props) => {
  const { logoutAction, navigation } = props;

  async function handleLogout() {
    await AsyncStorage.removeItem('@token');
    logoutAction();
  }

  function alertLogout() {
    Alert.alert('Deseja realmente sair?', null, [
      { text: 'Não' },
      { text: 'Sim', onPress: handleLogout },
    ]);
  }

  return (
    <>
      <Header navigation={navigation} botaoMenu textHeader="Conta" />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={degrades.d1}
        style={styles.container}
      >
        <ScrollView>
          <View style={styles.viewImagem}>
            <Image source={loja} style={styles.imagem} />
          </View>


          <View style={styles.viewInfoConta}>

            <View style={styles.headerInfoConta}>
              <Ionicons name="md-pin" size={30} />
              <Text style={styles.textTituloInfo}>Local</Text>
            </View>

            <View style={styles.informacoesConta}>
              <Text style={styles.textInfo}>Box 300</Text>
            </View>

          </View>

          <View style={styles.viewInfoConta}>
            <View style={styles.headerInfoConta}>
              <Ionicons name="md-time" size={30} />
              <Text style={styles.textTituloInfo}>Horário de funcionamentos</Text>
            </View>

            <View style={styles.informacoesConta}>
              <Text style={styles.textInfo}>Segunda: 08:00 - 12:00</Text>
              <Text style={styles.textInfo}>Terça: 08:00 - 12:00</Text>
              <Text style={styles.textInfo}>Quarta: 08:00 - 12:00</Text>
              <Text style={styles.textInfo}>Quinta: 08:00 - 12:00</Text>
              <Text style={styles.textInfo}>Sexta: 08:00 - 12:00</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.buttonSair} onPress={alertLogout}>
            <Text style={styles.textButton}>Sair da conta</Text>
            <Ionicons name="md-exit" size={30} style={{ color: '#FFF' }} />
          </TouchableOpacity>

        </ScrollView>
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
  buttonSair: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: cores.danger,
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginVertical: 20,
  },
  textButton: {
    fontSize: 25,
    color: '#FFF',
    marginHorizontal: 10,
  },
  viewImagem: {
    borderWidth: 0,
    borderColor: 'red',
    height: (tamanhos.larguraTela * (9 / 16)),
    width: tamanhos.larguraTela,
    backgroundColor: '#FFF',
  },
  imagem: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  viewInfoConta: {
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 1,
  },
  headerInfoConta: {
    flexDirection: 'row',
  },
  informacaoConta: {
    flexDirection: 'row',
  },
  textTituloInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },

});

const mapDispatchToProps = (dispatch) => bindActionCreators({ logoutAction: logout }, dispatch);

export default connect(null, mapDispatchToProps)(Conta);
