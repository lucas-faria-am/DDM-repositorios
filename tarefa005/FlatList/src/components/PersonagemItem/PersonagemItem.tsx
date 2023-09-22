import { Image, Text, TouchableOpacity, View } from "react-native";
import { Personagens } from "../../data/personagensLista";
import { SeparatorItem } from "../SeparadorItem/SeparadorItem";
import { styles } from "./styles";

export function PersonagemItem({ nome, imagem, descrição }: Personagens) {
  return (
    <>
    <TouchableOpacity >
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