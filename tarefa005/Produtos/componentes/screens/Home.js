import React from "react";
import { View, StatusBar, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { cores, Itens } from '../database/Database';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: cores.white }}>
      <StatusBar backgroundColor={cores.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          <View style={{ position: 'absolute', top: 20, right: 20 }}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="cart"
                style={{
                  fontSize: 18,
                  color: cores.backgroundMedium,
                  padding: 12,
                  borderRadius: 10,
                  borderWidth: 1,
                  backgroundColor: cores.backgroundligt,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 10, padding: 16, marginTop: 50 }}>
            <Text style={{ fontSize: 30, color: cores.black, fontWeight: '400', letterSpacing: 1, marginBottom: 10 }}>Toy Market</Text>
            <Text style={{ fontSize: 14, color: cores.black, fontWeight: '400', letterSpacing: 1, lineHeight: 24 }}>O melhor lugar para você comprar sua Action Figure é aqui!</Text>
          </View>
          <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, color: cores.black, fontWeight: '500', letterSpacing: 1 }}>Produtos</Text>
              <Text style={{ fontSize: 14, color: cores.black, fontWeight: '400', opacity: 0.5, marginLeft: 10 }}>{Itens.length}</Text>
            </View>
            <Text style={{ fontSize: 14, color: cores.blue, fontWeight: '400' }}>Veja Tudo</Text>
          </View>
          {Itens.map((produto) => (
            <TouchableOpacity
            key={produto.id}
            onPress={() => navigation.navigate("ProdutoInfo", { produto })}
          >
            <View style={{ marginBottom: 20, padding: 16, borderWidth: 1, borderColor: cores.backgroundMedium, borderRadius: 10 }}>
              <Image source={produto.imagemProd} style={{ width: 100, height: 100 }} />
              <Text style={{ fontSize: 18, fontWeight: '500' }}>{produto.nomeProd}</Text>
              <Text style={{ fontSize: 14, fontWeight: '400', color: cores.black }}>{produto.descricao}</Text>
              <Text style={{ fontSize: 14, fontWeight: '400', color: cores.green }}>R$ {produto.precoProd.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
