import React from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity, Alert,
} from 'react-native';

import {
  Menu, MenuOptions, MenuOption, MenuTrigger,
} from 'react-native-popup-menu';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CardViewProduto = (props) => {
  const { onPress } = props;

  function deletarProduto() {
    Alert.alert('Deseja continuar?', 'Se você continuar o produto selecionado sera apagado', [
      { text: 'Cancelar' },
      { text: 'Apagar' },
    ]);
  }

  return (

    <TouchableOpacity style={styles.containerProduto} onPress={onPress}>
      <Image style={styles.imageProduto} source={require('../assets/celular.jpg')} />


      <View style={styles.containerInfoProduto}>
        <Text style={styles.textTituloAnuncio}>Título do anúncio</Text>
        <Text style={styles.textPrecoAnuncio}>R$ 899,90</Text>
      </View>

      <Menu>
        <MenuTrigger style={styles.menuOptions}>
          <Ionicons name="md-more" size={30} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={onPress}>
            <Text style={styles.textMenuOption}>Editar Produto</Text>
          </MenuOption>
          <MenuOption onSelect={deletarProduto}>
            <Text style={styles.textMenuOption}>Apagar Produto</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>

    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  containerProduto: {
    borderWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 0,
    padding: 5,
    marginTop: 1,
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
    fontSize: 16,
  },
  textPrecoAnuncio: {
    marginTop: 10,
    color: '#888',
  },
  menuOptions: {
    paddingHorizontal: 10,
  },
  textMenuOption: {
    fontSize: 18,

  },
});

export default CardViewProduto;
