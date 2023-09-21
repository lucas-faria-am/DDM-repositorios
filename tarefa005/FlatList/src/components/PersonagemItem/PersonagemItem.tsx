import { Image, Text, View } from "react-native";
import { Personagens } from "../../data/personagensLista";
import { styles } from "./styles";

export function PersonagemItem({ nome, imagem, descrição }: Personagens) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 120, height: 100 }} source={imagem} />
      <View style={styles.content}>
        <Text style={styles.title}>{nome}</Text>
        <Text numberOfLines={5} style={styles.description}>
          {descrição}
        </Text>
      </View>
    </View>
  );
}