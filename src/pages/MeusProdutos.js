import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ScrollView, Alert, ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuProvider } from 'react-native-popup-menu';
import AsyncStorage from '@react-native-community/async-storage';
import { degrades, varAsyncStorage } from '../constantes';
import CardViewProduto from '../components/CardViewProduto';
import Header from '../components/Header';
import api from '../services/api';
import FAB from '../components/FAB';

const MeusProdutos = ({ navigation }) => {
  const [anuncios, setAnuncios] = useState([]);
  const [token, setToken] = useState('');
  const user = useSelector((state) => state.user);

  function handleDelete(id) {
    function deletar() {
      api.delete(`/storeAuth/ads/delete/${id}`, {
        headers: {
          authorization: `Baerer ${token}`,
        },
      }).then(() => {
        const novaListaAnuncios = anuncios.filter((anuncio) => anuncio.id !== id);
        setAnuncios(novaListaAnuncios);
        ToastAndroid.show('O anúcio foi apagado', ToastAndroid.SHORT);
      });
    }

    Alert.alert('Deseja continuar?', 'Se você continuar o anúncio sera apagado', [
      { text: 'Cancelar' },
      { text: 'Apagar', onPress: deletar },
    ]);
  }

  function handleClick() {
    navigation.navigate('Produto');
  }

  useEffect(() => {
    async function getToken() {
      const t = await AsyncStorage.getItem(varAsyncStorage.token);
      setToken(t);
    }
    api.get(`/ads?store_id=${user.id}`).then((response) => {
      setAnuncios(response.data);
    });
    getToken();
  }, []);

  return (
    <>
      <MenuProvider>
        <Header navigation={navigation} botaoMenu textHeader="Meus produtos" botaoAdicionar />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={degrades.d1}
          style={styles.container}
        >
          <ScrollView style={styles.scrollPrincipal}>
            {
              anuncios.map((anuncio) => (
                <CardViewProduto
                  key={anuncio.id}
                  onPress={handleClick}
                  ads={anuncio}
                  token={token}
                  handleDelete={() => handleDelete(anuncio.id)}
                />
              ))
            }
          </ScrollView>

          <FAB style={styles.floatingActionButtom}>
            <Icon name="md-add" size={35} color="#fff" />
          </FAB>

        </LinearGradient>
      </MenuProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 10,
  },
  textTitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  scrollPrincipal: {
    flex: 1,
    alignSelf: 'stretch',
  },
  textButton: {
    fontSize: 20,
    color: '#555',
    fontWeight: 'bold',
  },
  floatingActionButtom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 15,
  },

});

export default MeusProdutos;
