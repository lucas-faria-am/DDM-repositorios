import { View , StyleSheet } from 'react-native';
import Lista from './src/screens/lista/Lista';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});