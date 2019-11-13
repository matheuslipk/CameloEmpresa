import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { cores } from '../constantes';

// import { Container } from './styles';

export default function MyDrawer({ navigation }) {
  const usuario = useSelector((state) => state.user);

  function LinkNavigation(nome, link, icon) {
    return (
      <TouchableOpacity style={styles.linkButtom} onPress={() => navigation.navigate(link)}>
        <Ionicons name={icon} size={25} style={{ paddingHorizontal: 10 }} />
        <Text style={{ fontSize: 18 }}>{nome}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topoDrawer} onPress={() => navigation.navigate('Conta')}>
        <Image source={usuario.avatar} style={styles.imagemPerfil} />
        <Text>{usuario.name}</Text>
        <Text>{usuario.email}</Text>
      </TouchableOpacity>

      <View style={styles.corpoDrawer}>
        {LinkNavigation('Main', 'Main', 'md-home')}
        {LinkNavigation('Meus Produtos', 'Meus Produtos', 'md-list')}
        {LinkNavigation('Conta', 'Conta', 'md-person')}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.secundaria,
  },
  topoDrawer: {
    backgroundColor: cores.primaria,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  corpoDrawer: {
    borderWidth: 0,
    flex: 1,
  },
  linkButtom: {
    flexDirection: 'row',
    borderWidth: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#AAA',
  },
  imagemPerfil: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginVertical: 10,
  },
});
