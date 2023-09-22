import { FlatList, SafeAreaView, ScrollView } from 'react-native';
import { PersonagemItem } from '../../components/PersonagemItem/PersonagemItem';
import { PersonagensLista } from '../../data/personagensLista';
import { styles } from "./styles";
export default function Lista({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        keyExtractor={(item) => item.nome}
        data={PersonagensLista}
        renderItem={({item}) => <PersonagemItem {...item} navigation={navigation} />}
      />
      {/* <ScrollView>
      {PersonagensLista.map(personagem => (
          <PersonagemItem key={personagem.nome} {...personagem}/>
      ))}
      </ScrollView> */}
    </SafeAreaView>
  );
}
