import React from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';

import {
  Menu, MenuOptions, MenuOption, MenuTrigger,
} from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CardViewProduto = (props) => {
  const {
    onPress, ads, handleDelete,
  } = props;

  return (

    <TouchableOpacity style={styles.containerProduto} onPress={onPress}>
      <Image style={styles.imageProduto} source={require('../assets/celular.jpg')} />


      <View style={styles.containerInfoProduto}>
        <Text style={styles.textTituloAnuncio}>{ads.name}</Text>
        <Text style={styles.textPrecoAnuncio}>
          R$
          {' '}
          {ads.price}
        </Text>
      </View>

      <Menu>
        <MenuTrigger style={styles.menuOptions}>
          <Ionicons name="md-more" size={30} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={onPress}>
            <Text style={styles.textMenuOption}>Editar Produto</Text>
          </MenuOption>
          <MenuOption onSelect={handleDelete}>
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
