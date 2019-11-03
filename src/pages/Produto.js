import React, { useState } from 'react';
import {
  StyleSheet, TouchableOpacity, Text, Image, View, ScrollView, Picker,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { cores, degrades } from '../constantes';
import Header from '../components/Header';
import { MyTextInput, MyTextInputMultiline } from '../components/MyTextInputs';
import imagemCelular from '../assets/celular.jpg';
import imagemCelular2 from '../assets/celular2.jpg';

const Produto = ({ navigation }) => {
  const [frete, setFrete] = useState();

  function voltarTela() {
    navigation.goBack();
  }

  function onChangeFrete(itemValue) {
    setFrete(itemValue);
  }

  return (
    <>
      <Header navigation={navigation} botaoVoltar textHeader="Detalhes do produto" />
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={degrades.d1}
          style={{ flex: 1 }}
        >
          <View>
            <ScrollView
              style={styles.scrollImagens}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <Image style={styles.imagemProduto} source={imagemCelular} />
              <Image style={styles.imagemProduto} source={imagemCelular2} />
              <Image style={styles.imagemProduto} source={imagemCelular} />
              <Image style={styles.imagemProduto} source={imagemCelular2} />
            </ScrollView>

            <MyTextInput name="Título" value="Título do anúncio" />
            <MyTextInput name="Preço" value="R$ 899,90" />
            <MyTextInput name="Frete" value="" />
            <MyTextInputMultiline name="Descrição" multiline />

            <View style={styles.containerPicker}>
              <Text style={{ color: cores.textLabelInput }}>Forma de entrega</Text>
              <Picker style={styles.picker} onValueChange={onChangeFrete} selectedValue={frete}>
                <Picker.Item label="Somente em loja" value="loja" />
                <Picker.Item label="Correios" value="correio" />
              </Picker>
            </View>

            <TouchableOpacity style={styles.buttonSalvar} onPress={voltarTela}>
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>

          </View>

        </LinearGradient>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollImagens: {
    borderWidth: 0,
    marginVertical: 5,
    padding: 5,
    height: 120,
  },
  imagemProduto: {
    borderRadius: 5,
    width: 110,
    height: 110,
    marginHorizontal: 2,
  },
  buttonSalvar: {
    padding: 5,
    backgroundColor: cores.primaria,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 20,
  },
  textButton: {
    fontSize: 25,
    color: '#FFF',
  },
  containerPicker: {
    backgroundColor: '#FFF',
    paddingHorizontal: 5,
  },
  picker: {
  },

});

export default Produto;
