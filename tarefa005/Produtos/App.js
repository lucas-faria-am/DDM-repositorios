import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import home from './componentes/screens/Home';
import ProdutoInfo from './componentes/screens/ProdutoInfo';

const App = () => {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }
      }>
        <Stack.Screen name="Home" component={home}/>
        <Stack.Screen name="ProdutoInfo" component={ProdutoInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
