import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const CardViewProduto = () => {

    return (
        <View style={styles.containerProduto}>
            <Image style={styles.imageProduto} source={require('../assets/celular.jpg')}/>

            <View style={styles.containerInfoProduto}>
                <Text style={styles.textTituloAnuncio}>Titulo do anúncio</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({    
  containerProduto:{
    borderWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: "#FFF",
    elevation: 10,
    borderRadius: 10,
    padding: 2,
    marginVertical: 5,
    flexDirection: 'row'
  },
  imageProduto:{
    width: 120,
    height: 120,
  },
  containerInfoProduto:{
    borderWidth: 0,
    flex: 1,
    paddingHorizontal: 5
  },
  textTituloAnuncio:{
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: "center"
  },
})

export default CardViewProduto