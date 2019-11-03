import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { cores, tamanhos } from '../constantes';

const BotaoIcone = ({ onClick, icone, style }) => (
  <TouchableOpacity onPress={onClick} style={style}>
    <Ionicons
      name={icone}
      size={35}
      style={styles.icone}
      color={cores.tinkColorHeader}
    />
  </TouchableOpacity>
);

const Header = (props) => {
  const {
    navigation, botaoVoltar, botaoMenu, textHeader, botaoAdicionar,
  } = props;

  function voltarTela() {
    navigation.goBack();
  }

  function openDrawer() {
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      { botaoVoltar ? <BotaoIcone onClick={voltarTela} icone="ios-arrow-round-back" /> : null }
      { botaoMenu ? <BotaoIcone onClick={openDrawer} icone="md-menu" /> : null }
      { textHeader ? <Text style={styles.textHeader}>{textHeader}</Text> : null }
      { botaoAdicionar ? <BotaoIcone icone="md-add" style={styles.iconeRigth} /> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: tamanhos.alturaHeader,
    backgroundColor: cores.header,
    elevation: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  icone: {
    marginHorizontal: 15,
  },
  textHeader: {
    fontSize: 20,
    color: cores.tinkColorHeader,
  },
  iconeRigth: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
  },
});

export default Header;
