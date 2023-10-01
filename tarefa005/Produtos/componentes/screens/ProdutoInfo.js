import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { cores, itens } from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import { StatusBar } from "expo-status-bar";
import ImageCarousel from "./ImageCarousel"; 

const ProdutoInfo = ({ route }) => {
  const { produto } = route.params;

  console.log(produto);

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: cores.white,
      position: 'relative',
    }}>
      <StatusBar backgroundColor={cores.backgroundligt} barStyle="darl-content" />
      <ScrollView>
        <View>
          <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 16,
            paddingLeft: 16,
          }}>
            <TouchableOpacity>
              <Entypo name="chevron-left"
                style={{
                  fontSize: 18,
                  color: cores.backgroundDark,
                  padding: 12,
                  backgroundColor: cores.white,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
            <View style={{
              
              paddingRight: 70,
            }}>
              {/* Renderize o componente ImageCarousel aqui */}
              <ImageCarousel images={[produto.imagemProd, ...produto.imagemProdList]} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProdutoInfo;
