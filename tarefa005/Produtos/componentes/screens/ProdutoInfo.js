import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { cores } from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import { StatusBar } from "expo-status-bar";
import ImageCarousel from "./ImageCarousel"; 

const ProdutoInfo = ({ route }) => {
  const { produto } = route.params;

  console.log();

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: cores.white,
      position: 'relative',
      flexDirection: 'column',
    }}>
      <StatusBar backgroundColor={cores.backgroundligt} barStyle="darl-content" />
      <ScrollView>
        <View>
          <View style={{
            width: '100%',
            alignItems: 'center',
            paddingTop: 16,
            paddingLeft: 16,
          }}>
            <TouchableOpacity style={{
              position: 'absolute',
              top: 20, 
              left: 20,
            }}>
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
              flex: 1,
            }}>
              <ImageCarousel images={[produto.imagemProd, ...produto.imagemProdList]} />
            </View>
            <View>
              <Text style={{ fontSize: 20, color: cores.black, fontWeight: '400', letterSpacing: 1, marginBottom: 10 }}>{produto.nomeProd}</Text>
              <Text style={{ fontSize: 14, color: cores.black, fontWeight: '400', letterSpacing: 1, lineHeight: 24 }}>{produto.descricao}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProdutoInfo;
