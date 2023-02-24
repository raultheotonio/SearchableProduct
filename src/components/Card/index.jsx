import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Card = ({nome, preco, imagem, categories}) => {

  return (
    <View style={styles.container}>
      <Image source={{uri: imagem}} style={styles.imagem} />
      <View style={styles.descricao}>
        <Text>{nome}</Text>
        <Text>R$: {preco}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  imagem: {
    width: 90,
    height: 90,
  },
  descricao: {
    marginHorizontal: 16,
  },
});

export default Card;
