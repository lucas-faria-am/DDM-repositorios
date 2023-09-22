import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lista from './src/screens/lista/Lista';
import ItemLista from './src/screens/itemlista/ItemLista';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={Lista} options={{ headerShown: false }} />
        <Stack.Screen name="ItemLista" component={ItemLista} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import { View , StyleSheet } from 'react-native';
// import Lista from './src/screens/lista/Lista';
// import { TextInput, StatusBar } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle='light-content' backgroundColor='#4F4F4F' translucent
//       />
//       <Lista />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });