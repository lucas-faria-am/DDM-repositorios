import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { cores } from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import { StatusBar } from "expo-status-bar";
import ImageCarousel from "./ImageCarousel";
import { useNavigation } from '@react-navigation/native';


const ProdutoInfo = ({ route }) => {
  const { produto } = route.params;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={cores.backgroundligt} barStyle="dark-content" />
      <View style={{ backgroundColor: 'lightgrey', flex: 1 }}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate('Home')}
        >
          <Entypo name="chevron-left" style={styles.iconPreto} />
        </TouchableOpacity>
        <View style={{flex: 1 }}>
          <ImageCarousel images={[produto.imagemProd, ...produto.imagemProdList]} />
        </View>
      </View>
      <View style={styles.containerTexto}>
        <Text style={styles.texto}>{produto.nomeProd}</Text>
        <Text style={styles.texto}>Descrição</Text>
        <Text style={{marginTop: 10}}>{produto.descricao}</Text>
        <Text style={styles.texto}>Valor</Text>
        <Text style={styles.produtoPreco}>R$ {produto.precoProd.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botaoVoltar: {
    position: 'absolute',
    marginTop: 10,
    top: 20,
    left: 20,
    zIndex: 1,
  },
  
  iconPreto: {
    fontSize: 18,
    color: cores.backgroundDark,
    padding: 12,
    backgroundColor: cores.white,
    borderRadius: 10,
  },
  
  containerTexto: {
    marginBottom: 40,
    marginLeft: 10,

  },

  texto: {
    fontSize: 20,
    color: cores.black,
    fontWeight: '400',
    letterSpacing: 1,
    marginTop: 10,
  },

  produtoPreco: {
    fontSize: 14,
    fontWeight: '400',
    color: cores.green,
    marginTop: 10,
  },
  
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
});

export default ProdutoInfo;
