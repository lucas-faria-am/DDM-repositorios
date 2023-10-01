import { FlatList, SafeAreaView } from 'react-native';
import { PersonagemItem } from '../../components/PersonagemItem/PersonagemItem';
import { PersonagensLista } from '../../data/personagensLista';
import { styles } from "./styles";

export default function Lista() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.nome}
        data={PersonagensLista}
        renderItem={({item}) => <PersonagemItem {...item}/>}
      />
    </SafeAreaView>
  );
}
