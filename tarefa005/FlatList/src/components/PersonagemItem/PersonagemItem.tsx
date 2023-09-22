import { Image, ImageProps, Text, TouchableOpacity, View } from "react-native";
import { SeparatorItem } from "../SeparadorItem/SeparadorItem";
import { styles } from "./styles";

export interface PersonagemItemProps {
    nome: string;
    imagem: ImageProps["source"];
    descrição: string;
    navigation: any;
}

export function PersonagemItem({ nome, imagem, descrição, navigation }: PersonagemItemProps ) {

  const navigateToItemLista = (itemNome: string) => {
    navigation.navigate('ItemLista', { itemNome });
  };
  
  return (
    <>
    <TouchableOpacity 
        onPress={() => navigateToItemLista(nome)}
      >
      <View style={styles.container}>
        <Image style={{ width: 50, height: 50 }} source={imagem} />
        <View style={styles.content}>
          <Text style={styles.title}>{nome}</Text>
          <Text numberOfLines={5} style={styles.description}>
            {descrição}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    <SeparatorItem/>
    </>
  );
}