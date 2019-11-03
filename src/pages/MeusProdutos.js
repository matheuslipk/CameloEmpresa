import React from 'react';
import {
  StyleSheet, ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { MenuProvider } from 'react-native-popup-menu';
import { degrades } from '../constantes';
import CardViewProduto from '../components/CardViewProduto';
import Header from '../components/Header';

const MeusProdutos = ({ navigation }) => {
  function handleClick() {
    navigation.navigate('Produto');
  }

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
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
            <CardViewProduto onPress={handleClick} />
          </ScrollView>


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

});

export default MeusProdutos;
