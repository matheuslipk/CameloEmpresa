import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import { cores, degrades } from '../constantes'
import CardViewProduto from "../components/CardViewProduto"

const MeusProdutos = function (props) {

  function handleLogout(){
    
  }

  return (    
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={degrades.d1} style={styles.container}>
          
        <ScrollView style={styles.scrollPrincipal}>
          <Text style={styles.textTitulo}>Seus Produtos</Text>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
          <CardViewProduto/>
        </ScrollView>

        
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  textTitulo:{
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  scrollPrincipal:{
    alignSelf: 'stretch',
    flex: 1,
  },
  textButton:{
    fontSize: 20,
    color: "#555",
    fontWeight: 'bold'
  }

});

export default MeusProdutos;
