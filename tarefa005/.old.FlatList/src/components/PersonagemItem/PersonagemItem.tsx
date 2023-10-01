import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Personagens } from "../../data/personagensLista";
import { SeparatorItem } from "../SeparadorItem/SeparadorItem";
import { styles } from "./styles";


export function PersonagemItem( personagem : Personagens ) {
  const { imagems } = personagem;
  const { navigate } = useNavigation();
  
  return (
    <>
    <TouchableOpacity 
        onPress={() => navigate('ItemLista', 
          personagem
        )}
      >
      <View style={styles.container}>
        {/* <Image style={{ width: 50, height: 50 }} source={personagem.imagems[0]} /> */}
        {imagems.map((imagem, i) => (
          <Image
            key={i}
            style={styles.imagems}
            source={imagem.source}
          />
        ))}
        <View style={styles.content}>
          <Text style={styles.title}>{personagem.nome}</Text>
          <Text numberOfLines={5} style={styles.description}>
            {personagem.descricao}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    <SeparatorItem/>
    </>
  );
}