import React from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';

const CardViewProduto = (props) => {
  const { onPress } = props;


  return (
    <TouchableOpacity style={styles.containerProduto} onPress={onPress}>
      <Image style={styles.imageProduto} source={require('../assets/celular.jpg')} />

      <View style={styles.containerInfoProduto}>
        <Text style={styles.textTituloAnuncio}>Titulo do anúncio</Text>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerProduto: {
    borderWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 10,
    padding: 2,
    marginTop: 15,
    flexDirection: 'row',
  },
  imageProduto: {
    width: 120,
    height: 120,
  },
  containerInfoProduto: {
    borderWidth: 0,
    flex: 1,
    paddingHorizontal: 5,
  },
  textTituloAnuncio: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default CardViewProduto;
