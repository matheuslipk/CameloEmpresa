import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

import { cores, tamanhos } from '../constantes';

const Header = () => (
  <View style={styles.container} />
);

const styles = StyleSheet.create({
  container: {
    height: tamanhos.alturaHeader,
    backgroundColor: cores.header,
    elevation: 10,
  },
});

export default Header;
